module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send("Servidor rodando na porta 3000, '/atendimentos'"))

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send("Você esta´na rota atendimentos e está realizando um post")
    })



}