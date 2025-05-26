# Etapa 1: Build - folosim node ca base image
FROM node:20 AS builder

# Setam directorul de lucru
WORKDIR /app

# Copiem package.json si package-lock.json
COPY package*.json ./

# Instalare dependinte folosind npm ci (pentru builduri curate)
RUN npm ci

# Copiem restul codului sursa
COPY . .

# Build aplicatia
RUN npm run build

# Etapa 2: Imagine finala pentru productie - folosim nginx
FROM nginx:stable-alpine AS runner

# Copiem fisierul de configurare nginx custom daca este nevoie (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Stergem fisierele default din nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiem output-ul buildului in nginx html folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expunem portul default nginx
EXPOSE 80

# Start server nginx
CMD ["nginx", "-g", "daemon off;"]
