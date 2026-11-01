
import React, { useContext } from 'react'
import { productcontext } from '../Utilis/Context'
import { Link, useLocation } from 'react-router-dom'

function Nav() {
  const [products] = useContext(productcontext)
  const location = useLocation()

  const distinct_category = [...new Set(
    (products || []).map((p) => p.category)
  )]

  const colors = [
    'bg-blue-500',
    'bg-purple-500',
    'bg-emerald-500',
    'bg-orange-500',
    'bg-pink-500',
    'bg-cyan-500'
  ]

  const selectedCategory = new URLSearchParams(location.search).get('category')

  return (
    <nav className="
      w-full lg:w-[260px] lg:min-w-[260px]
      lg:h-full
      bg-white
      border-r border-zinc-200
      flex flex-col
      px-4 sm:px-6
      py-5
    ">

      {/* Logo / Brand */}
      <Link to="/" className="text-2xl font-bold tracking-tight text-zinc-900">
        Shop<span className="text-blue-600">Ease.</span>
      </Link>

      <p className="text-xs text-zinc-400 mt-1 mb-7">
        Your shopping destination
      </p>

      {/* Add Product */}
      <Link
        to="/create"
        className="
          flex items-center justify-center gap-2
          w-full py-3 px-4
          bg-blue-600 text-white
          rounded-xl font-medium
          shadow-sm
          hover:bg-blue-700 hover:shadow-md
          transition-all duration-200
        "
      >
        <span className="text-xl">+</span>
        Add New Product
      </Link>

      {/* Divider */}
      <div className="border-t border-zinc-100 my-7"></div>

      {/* Categories */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
          Categories
        </h2>

        <span className="text-xs bg-zinc-100 text-zinc-500 px-2 py-1 rounded-md">
          {distinct_category.length}
        </span>
      </div>

      <div className="
        flex flex-row lg:flex-col
        gap-2
        overflow-x-auto lg:overflow-y-auto lg:overflow-x-hidden
        pb-2 lg:pb-0
      ">
        {/* All Products */}
        <Link
          to="/"
          className={`
            flex items-center gap-3
            shrink-0
            px-3 py-3 rounded-xl
            transition-all duration-200
            ${!selectedCategory && location.pathname === '/'
              ? 'bg-blue-50 text-blue-700 font-semibold'
              : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'}
          `}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
          <span className="text-sm">All Products</span>
        </Link>

        {distinct_category.map((c, i) => (
          <Link
            key={c}
            to={`/?category=${encodeURIComponent(c)}`}
            className={`
              flex items-center gap-3
              shrink-0
              px-3 py-3 rounded-xl
              transition-all duration-200
              ${selectedCategory === c
                ? 'bg-blue-50 text-blue-700 font-semibold'
                : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'}
            `}
          >
            <span className={`
              w-2.5 h-2.5 rounded-full shrink-0
              ${colors[i % colors.length]}
            `}></span>

            <span className="text-sm capitalize whitespace-nowrap">
              {c}
            </span>
          </Link>
        ))}
      </div>

    </nav>
  )
}

export default Nav
