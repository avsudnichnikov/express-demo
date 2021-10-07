const express = require('express')
const server = express()
const port = process.env.PORT || 3000;

server.get('/', (req, res) => {
    res.send(JSON.stringify({
        data: {
            info: 'Тут ничего нет. Попробуйте отправить запрос на \/answer',
        }
    }))
})

server.get('/answer', (req, res) => {
    res.send(JSON.stringify({
        data: {
            info: 'Это GET-запрос. Попробуйте отправить POST-запрос',
        }
    }))
})

server.post('/answer', function(req, res) {
    const added = 'это очень интересный вопрос, но не менее интересен - "Есть ли жизнь на Марсе?"';

    res.send(JSON.stringify({
        data: {
            info: 'Это POST-запрос',
            answer: req.body.question,
        }
    }))
});


server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
