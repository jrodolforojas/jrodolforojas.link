import CardLink from '@/components/card-link'
import { getAllUrls } from '@/services/api/url'

export default async function Home () {
  const urls = await getAllUrls()

  return (
    <div className="max-w-6xl p-10 mx-auto h-screen">
      <header className="flex justify-center items-center">
        <h1 className="text-3xl font-bold text-orange-600">Jose Rodolfo Rojas</h1>
      </header>
      <main className="flex flex-col w-full justify-center items-center">
        <section className="flex flex-col gap-y-4 mt-8 w-full max-w-lg">
          {urls.map((link) => (
            <CardLink
              key={link.id}
              title={link.title}
              url={link.url}
            />
          ))}
        </section>
      </main>
    </div>
  )
}
