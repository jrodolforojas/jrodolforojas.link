import { Dialog } from "@headlessui/react"
import * as zod from 'zod'

const createLinkSchema = zod.object({
  url: zod.string().url(),
  name: zod.string().min(3, 'Name must be at least 3 characters long')
})
export default function CreateLinkForm({ isOpen, handleChange }: {
  isOpen: boolean
  handleChange: () => void
}) {

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.currentTarget))
    try {
      const data = createLinkSchema.parse(formData)
      const response = await fetch('https://jrodolfolinks.up.railway.app/url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          url: data.url,
          shorten: data.name.toLowerCase()
        })
      })

      if (response.ok) {
        handleChange()
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Dialog open={isOpen} onClose={handleChange} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-8">
          <Dialog.Panel className="mx-auto rounded bg-slate-950 w-full p-10 max-w-lg">
            <Dialog.Title className="font-bold text-lg mb-5">URL Shorten Generator</Dialog.Title>
            <form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="url"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Url</label>
                <input type="url" id="url" name="url"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://jrodolfo.link" required />
              </div>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Portfolio" required />
              </div>
              <button type="submit"
                className="bg-orange-600 py-3 rounded-md text-lg mt-5 px-8 hover:text-gray-300 w-full">Create Link</button>
            </form>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}