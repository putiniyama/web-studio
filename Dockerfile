# Используем официальный образ Node.js
FROM node:14-alpine

# Создаем директорию приложения в контейнере
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы приложения
COPY . .

# Команда для запуска сборки проекта
RUN npm run build

# Команда для запуска сервера
CMD ["node", "server.js"]
