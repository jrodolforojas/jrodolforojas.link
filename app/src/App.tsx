import { useEffect, useState } from "react"
import CardLink from "./components/card-link"
import { URL } from "./types/api/url"
import { GithubIcon, LinkIcon, LinkedInIcon, YoutubeIcon } from "./components/icons"
import CreateLinkForm from "./components/create-link-form"
import { getAllUrls, getUrlByShorten } from "./services/api/url"

const ICONS = {
  youtube: YoutubeIcon,
  linkedin: LinkedInIcon,
  github: GithubIcon,
  default: LinkIcon
}

const getUrl = async (shorten: string) => {
  if (shorten.length === 0) return
  const url = await getUrlByShorten(shorten)
  if (url !== '') {
    window.location.replace(url)
  }
}

function App() {
  const pathname = window.location.pathname.replace('/', '')
  useEffect(() => {
    getUrl(pathname)
  }, [])

  if (pathname.length > 0) return null

  const [links, setLinks] = useState<URL[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const handleIsOpen = () => setIsOpen(!isOpen)

  const getUrls = async () => {
    const urls = await getAllUrls()
    setLinks(urls)
  }

  useEffect(() => {
    getUrls()
  }, [])
  return (
    <>
      <div className="max-w-6xl p-10 mx-auto h-screen">
        <header className="flex justify-center items-center">
          <h1 className="text-3xl font-bold text-orange-600">Jose Rodolfo Rojas</h1>
        </header>
        <main className="flex flex-col w-full justify-center items-center">
          <CreateLinkForm isOpen={isOpen} handleChange={handleIsOpen} />
          <section className="flex flex-col gap-y-4 mt-8 w-full max-w-lg">
            {links.map((link) => (
              <CardLink
                key={link.id}
                title={link.title}
                Icon={ICONS[link.shorten as keyof typeof ICONS] || ICONS.default}
                onClick={() => window.open(link.url, '_blank')}
              />
            ))}
          </section>
        </main>
        <footer className="fixed bottom-0 w-full px-10 left-0 right-0 pb-5">
          <div className="flex items-center justify-center w-full ">
            <button
              onClick={handleIsOpen}
              className="bg-orange-600 py-3 rounded-md text-lg mt-5 px-8 hover:text-gray-300 w-full max-w-lg">Create Link</button>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
