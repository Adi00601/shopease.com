
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { productcontext } from '../Utilis/Context'

function Details() {

   const [products, setproducts] = useContext(productcontext);
   const [product, setproduct] = useState(null);

   const { id } = useParams();
   const navigate = useNavigate();

   useEffect(() => {
      if (products && products.length > 0) {
         setproduct(products.find(p => String(p.id) === id) || null);
      }
   }, [id, products]);

   const ProductDeleteHandler = () => {
      const FilteredProducts = products.filter((p) => String(p.id) !== id);
      setproducts(FilteredProducts);
      localStorage.setItem("products", JSON.stringify(FilteredProducts));

      navigate('/');
   }

   if (!product) {
      return (
         <div className="min-h-screen flex items-center justify-center bg-zinc-50">
            <h1 className="text-xl text-zinc-500">Loading...</h1>
         </div>
      );
   }

   return (

      <div className="
         min-h-screen w-full
         bg-zinc-50
         flex items-center justify-center
         px-4 py-8 sm:px-8
      ">

         {/* Main Container */}
         <div className="
            w-full max-w-6xl mx-auto
            bg-white
            rounded-2xl
            border border-zinc-200
            shadow-sm
            p-5 sm:p-8 lg:p-10
         ">

            {/* Home Button */}
            <div className="mb-8">

               <Link
                  to="/"
                  className="
                     inline-flex items-center gap-2
                     px-4 py-2
                     rounded-lg
                     text-sm font-medium
                     text-zinc-600
                     bg-zinc-100
                     hover:bg-zinc-200
                     hover:text-zinc-900
                     transition-all duration-200
                  "
               >
                  <span>←</span>
                  Home
               </Link>

            </div>

            {/* Product Content */}
            <div className="
               flex flex-col lg:flex-row
               items-center justify-center
               gap-8 lg:gap-16
            ">

               {/* Product Image */}
               <div className="
                  w-full lg:w-1/2
                  h-[300px] sm:h-[400px] lg:h-[450px]
                  bg-zinc-50
                  rounded-xl
                  flex items-center justify-center
                  p-6
               ">

                  <img
                     className="w-full h-full object-contain"
                     src={product.image}
                     alt={product.title}
                  />

               </div>

               {/* Product Information */}
               <div className="w-full lg:w-1/2">

                  <p className="
                     text-sm uppercase tracking-widest
                     text-blue-600 font-semibold mb-4
                  ">
                     {product.category}
                  </p>

                  <h1 className="
                     text-2xl sm:text-3xl lg:text-4xl
                     font-bold text-zinc-900
                     leading-tight
                  ">
                     {product.title}
                  </h1>

                  <h2 className="
                     text-3xl font-bold
                     text-emerald-600
                     my-6
                  ">
                     ${product.price}
                  </h2>

                  <div className="border-t border-zinc-200 my-5"></div>

                  <h3 className="text-lg font-semibold text-zinc-800 mb-3">
                     Product Description
                  </h3>

                  <p className="
                     text-zinc-600
                     leading-7
                     text-sm sm:text-base
                  ">
                     {product.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="
                     flex flex-wrap gap-3
                     mt-10
                  ">

                     {/* Edit Button */}
                     <Link
                        to={`/edit/${product.id}`}
                        className="
                           flex-1 text-center
                           min-w-[110px]
                           py-3 px-6
                           bg-blue-600
                           text-white
                           font-semibold
                           rounded-xl
                           shadow-sm
                           hover:bg-blue-700
                           hover:shadow-md
                           transition-all duration-200
                        "
                     >
                        Edit Product
                     </Link>

                     {/* Delete Button */}
                     <button
                        onClick={ProductDeleteHandler}
                        className="
                           flex-1 min-w-[110px]
                           py-3 px-6
                           bg-red-50
                           border border-red-200
                           text-red-600
                           font-semibold
                           rounded-xl
                           hover:bg-red-600
                           hover:text-white
                           hover:border-red-600
                           transition-all duration-200
                        "
                     >
                        Delete Product
                     </button>

                  </div>

               </div>

            </div>

         </div>

      </div>
   )
}

export default Details
