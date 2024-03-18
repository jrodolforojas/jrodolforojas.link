import { URL, URLResponse } from '../../types/api/url'

const API_URL = 'https://jrodolfolinks.up.railway.app/url'

export const getAllUrls = async () => {
  const response = await fetch(API_URL)
  const data = await response.json() as URLResponse

  const urls: URL[] = data.urls.map((url) => ({
    id: url.id,
    url: url.url,
    shorten: url.shorten,
    title: url.shorten.charAt(0).toUpperCase() + url.shorten.slice(1)
  }))

  return urls
}

export const getUrlByShorten = async (shorten: string) => {
  const response = await fetch(`${API_URL}/${shorten}`)
  if (!response.ok) return
  const { url: data } = await response.json()
  if (data == null) return
  return data.url ?? ''
}
