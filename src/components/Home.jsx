
import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Nav from './Nav'
import { productcontext } from '../Utilis/Context'

function Home() {

  const [products] = useContext(productcontext)
  const { search } = useLocation()

  const category = new URLSearchParams(search).get('category')

  const filteredproducts = category
    ? (products || []).filter((p) => p.category === category)
    : products || []

  return (
    <div className="min-h-screen lg:h-screen flex flex-col lg:flex-row bg-zinc-50">

      {/* Sidebar */}
      <Nav />

      {/* Main Content */}
      <main className="
        flex-1 min-w-0 min-h-0
        p-4 sm:p-6 lg:p-8
        overflow-y-auto
      ">

        {/* Heading */}
        <div className="mb-7">
          <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            {category ? category : 'Discover Products'}
          </h1>

          <p className="text-sm text-zinc-500 mt-2">
            Explore our collection of products
          </p>
        </div>

        {/* Product Grid */}
        {filteredproducts.length > 0 ? (

          <div className="
            grid
            grid-cols-2
            sm:grid-cols-3
            xl:grid-cols-4
            2xl:grid-cols-5
            gap-4 sm:gap-5 lg:gap-6
          ">

            {filteredproducts.map((p) => (

              <Link
                to={`/details/${p.id}`}
                key={p.id}
                className="
                  group
                  min-w-0
                  bg-white
                  rounded-2xl
                  border border-zinc-200
                  overflow-hidden
                  shadow-sm
                  hover:shadow-lg
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >

                {/* Product Image */}
                <div className="
                  w-full
                  aspect-square
                  bg-zinc-50
                  overflow-hidden
                ">

                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="
                      w-full h-full
                      object-cover
                      group-hover:scale-110
                      transition-transform duration-300
                    "
                  />

                </div>

                {/* Product Details */}
                <div className="p-3 sm:p-4">

                  <p className="
                    text-xs
                    text-blue-600
                    font-medium
                    capitalize
                    mb-2
                  ">
                    {p.category}
                  </p>

                  <h2 className="
                    text-sm sm:text-base
                    font-semibold
                    text-zinc-800
                    line-clamp-2
                    min-h-[40px]
                    group-hover:text-blue-600
                    transition-colors
                  ">
                    {p.title}
                  </h2>

                  <p className="
                    text-base sm:text-lg
                    font-bold
                    text-zinc-900
                    mt-3
                  ">
                    ₹{Number(p.price).toLocaleString('en-IN')}
                  </p>

                  <p className="
                    text-xs
                    text-zinc-400
                    mt-2
                  ">
                    View Product →
                  </p>

                </div>

              </Link>

            ))}

          </div>

        ) : (

          /* Empty State */
          <div className="
            flex flex-col
            items-center justify-center
            min-h-[50vh]
            text-center
          ">
            <div className="text-5xl mb-4">📦</div>

            <h2 className="text-xl font-semibold text-zinc-800">
              No Products Found
            </h2>

            <p className="text-sm text-zinc-500 mt-2">
              Try selecting another category.
            </p>

            <Link
              to="/"
              className="
                mt-5
                px-5 py-2.5
                bg-blue-600
                text-white
                rounded-lg
                hover:bg-blue-700
                transition
              "
            >
              View All Products
            </Link>
          </div>

        )}

      </main>

    </div>
  )
}

export default Home
