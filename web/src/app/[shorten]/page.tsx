import { getUrlByShorten } from '@/services/api/url'
import { redirect } from 'next/navigation'

export default async function ShortenPage ({ params }: {
  params: {
    shorten: string
  }
}) {
  const { shorten } = params
  const url = await getUrlByShorten(shorten)
  if (url != null) {
    redirect(url)
  }

  redirect('/')
}
