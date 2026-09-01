# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm ci

# Copiar código fonte
COPY . .

# Build da aplicação
RUN npm run build

# Stage 2: Serve
FROM node:20-alpine

WORKDIR /app

# Instalar serve para servir a aplicação
RUN npm install -g serve

# Copiar arquivos construídos do stage anterior
COPY --from=builder /app/dist ./dist

# Copiar package.json para referência
COPY package.json ./

# Expor porta
EXPOSE 5173

# Comando padrão
CMD ["serve", "-s", "dist", "-l", "5173"]
