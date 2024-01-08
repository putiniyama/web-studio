import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const port = process.env.PORT || 3000

// Статические файлы React-приложения
app.use(express.static(join(__dirname, 'dist')))

// Обработка всех маршрутов и отправка React-приложения
app.get('*', (req, res) => {
	res.sendFile(join(__dirname, 'dist', 'index.html'))
})

// Слушаем порт
app.listen(port, () => {
	console.log(`Сервер запущен на порту ${port}`)
})
