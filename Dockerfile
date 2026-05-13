# ── Etapa 1: imagen base ─────────────────────────────────────
FROM node:18-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos de dependencias primero (mejor caché de capas)
COPY package*.json ./

# Instalar dependencias de producción únicamente
RUN npm install --omit=dev

# Copiar el resto del código fuente
COPY . .

# Puerto que expone la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "index.js"]
