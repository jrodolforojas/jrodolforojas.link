import { UrlModel } from '../models/url.js'

export class UrlController {
  static async getShortenUrls (req, res) {
    await UrlModel.getShortenUrls()
    res.json({ message: 'Hello from UrlController.getShortenUrls()' })
  }
}
