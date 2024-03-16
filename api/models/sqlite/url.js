import { createClient } from '@libsql/client'

function getClient () {
  const url = process.env.DATABASE_URL ?? ''
  const authToken = process.env.DATABASE_TOKEN ?? ''
  const client = createClient({
    url,
    authToken
  })
  return client
}

export class UrlModel {
  static async getShortenUrls () {
    const client = getClient()
    const response = await client.execute('SELECT * FROM shorten')

    return response.rows
  }

  static async getShortenUrl (shorten) {
    const client = getClient()
    const response = await client.execute({
      sql: 'SELECT * FROM shorten WHERE shorten = ?',
      args: [shorten]
    })

    return response.rows[0]
  }

  static async createShortenUrl (url, shorten) {
    const client = getClient()
    const response = await client.execute({
      sql: 'INSERT INTO shorten (url, shorten) VALUES (?, ?)',
      args: [url, shorten]
    })

    return response
  }
}
