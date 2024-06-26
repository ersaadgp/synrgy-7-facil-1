import express, { Express, Response } from 'express'
import knex from 'knex'
import { Model } from 'objection'
import { ArticlesModel } from './model/article.model'
import { CommentsModel } from './model/comment.model'
import swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from './swaggerConfig.json'

const app: Express = express()
const port = 8000

const knexInstance = knex({
  client: 'pg',
  connection: {
    user: 'postgres.ngxxbyglkmjfqzuromvm',
    password: '17Agustus1945',
    port: 6543,
    host: 'aws-0-ap-southeast-1.pooler.supabase.com',
    database: 'postgres',
  },
})

Model.knex(knexInstance)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.get('/', (_, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.get('/articles', async (_, res: Response) => {
  const articles = await ArticlesModel.query().withGraphFetched('comments')

  res.json({ data: articles })
})

app.post('/articles', async (_, res: Response) => {
  const articles = await ArticlesModel.query().withGraphFetched('comments')

  res.json({ data: articles })
})

app.get('/comments', async (_, res: Response) => {
  const comments = await CommentsModel.query().withGraphFetched('article')

  res.json({ data: comments })
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
