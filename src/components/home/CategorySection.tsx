import { categories } from '@/data/categories'

export function CategorySection() {
  return (
    <section className="py-16 bg-white" aria-labelledby="categories-heading">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="categories-heading" className="font-logo text-3xl md:text-4xl font-bold text-tinta mb-10 text-center">
          o que você quer agora?
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border border-linha hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 ${cat.color} bg-opacity-5`}
              aria-label={`Ver ${cat.label}`}
            >
              <span className="text-2xl" role="img" aria-hidden="true">{cat.emoji}</span>
              <span className="text-xs font-medium text-center leading-snug">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
