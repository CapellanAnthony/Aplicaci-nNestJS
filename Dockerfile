# Usar la imagen base oficial de Node.js
FROM node:22

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos del proyecto y instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Exponer el puerto en el que corre NestJS
EXPOSE 3000

# Comando de inicio
CMD ["npm", "run", "start"]
