import { UrlModel } from '../models/sqlite/url.js'

export class UrlController {
  static async getShortenUrls (req, res) {
    const urls = await UrlModel.getShortenUrls()
    res.json({ urls })
  }

  static async getShortenUrl (req, res) {
    const { shorten } = req.params
    const url = await UrlModel.getShortenUrl(shorten)
    res.json({ url })
  }

  static async createShortenUrl (req, res) {
    const { url, shorten } = req.body
    const response = await UrlModel.createShortenUrl(url, shorten)
    res.json({ response })
  }
}
