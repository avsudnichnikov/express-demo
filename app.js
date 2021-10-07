const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(JSON.stringify({
        data: {
            info: 'Тут ничего нет. Попробуйте отправить запрос на \/answer',
        }
    }))
})

app.get('/answer', (req, res) => {
    res.send(JSON.stringify({
        data: {
            info: 'Это GET-запрос. Попробуйте отправить POST-запрос',
        }
    }))
})

app.post('/answer', function(req, res) {
    const added = 'это очень интересный вопрос, но не менее интересен - "Есть ли жизнь на Марсе?"';
    const answer = (req.body.question) ? `"${req.body.question}" - ${added}` : 'Вы не задали вопрос';

    res.send(JSON.stringify({
        data: {
            info: 'Это POST-запрос',
            answer
        }
    }))
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
