import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './schema'
import { connect } from "./database";

const app = express()
connect()

app.get('/', (req, res) => {
    res.json({
        message: 'API - Administrador de proyectos'
    })
})


app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
        messageId: 'Test'
    }
}))

app.listen(4000, () => console.log('Servidor en el puerto 4000'))