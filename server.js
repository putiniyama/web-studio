// server.js

import express from 'express'
const app = express()
const port = 5173

app.get('/', (req, res) => {
	res.send('Привет, это ваш сервер!')
})

app.listen(port, () => {
	console.log(`Сервер запущен на порту ${port}`)
})
