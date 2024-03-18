import { ArrowUpRightIcon } from "./icons"

export default function CardLink({ title, description, Icon, onClick }: {
  title: string,
  description?: string,
  Icon?: () => JSX.Element
  onClick?: () => void
}) {
  return (
    <article onClick={onClick}
      className="group bg-slate-950  p-4 rounded-md w-full flex items-center justify-start cursor-pointer">
      <div className="w-10 h-10 font-bold text-orange-600 mr-3 group-hover:scale-110">
        {Icon && <Icon />}
      </div>
      <div>
        <span className="font-bold text-balance group-hover:scale-105 group-hover:underline group-hover:underline-offset-1 flex items-center">
          {title}
          <span className=" text-gray-500 ml-1 w-4 h-4 group-hover:text-white">
            <ArrowUpRightIcon />
          </span>
        </span>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
    </article >
  )
}