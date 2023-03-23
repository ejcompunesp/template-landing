type CardProps = {
  title: string
  description: string
}

const Card = ({ description, title }: CardProps) => (
  <div className="bg-white dark:bg-slate-200 rounded-lg px-6 py-4 ring-1 ring-slate-900/5 shadow-xl">
    <h3 className="text-slate-500 dark:text-white text-base font-medium tracking-tight">
      {title}
    </h3>
    <p className="text-slate-700 dark:text-slate-500 mt-2 text-sm">
      {description}
    </p>
  </div>
)

export default Card
