const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send("Servidor rodando na porta 3000, '/atendimentos'"))

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body

        Atendimento.adiciona(atendimento)
        res.send("Post Atendimento")
    })
}