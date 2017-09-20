const Koa = require('koa')
const Router = require('koa-router')
const graphqlHTTP = require('koa-graphql')

const app = new Koa()
const router = new Router()

const schema = require('./schema')

router.all('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.use(router.routes()).use(router.allowedMethods())

app.use(async ctx => {
    ctx.body = 'Hello world'
})

app.listen(8080)
console.log('listening at 8080 ...')