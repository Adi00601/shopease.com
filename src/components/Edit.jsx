
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { productcontext } from '../Utilis/Context'
import { toast } from 'react-toastify'

function Edit() {

 const [products, setproducts] = useContext(productcontext)
 const navigate = useNavigate()
 const { id } = useParams()

 const [product, setproduct] = useState(null)
 const [title, settitle] = useState("")
 const [image, setimage] = useState("")
 const [category, setcategory] = useState("")
 const [price, setprice] = useState("")
 const [description, setdescription] = useState("")

 useEffect(() => {
    const found = products.find((p) => String(p.id) === id)

    if (found) {
      setproduct(found)
      settitle(found.title)
      setimage(found.image)
      setcategory(found.category)
      setprice(String(found.price))
      setdescription(found.description)
    }
 }, [id, products])

 const EditProductHandler = (e) => {
    e.preventDefault()

    if (
        title.trim().length < 5 ||
        image.trim().length < 5 ||
        category.trim().length < 5 ||
        price.trim().length === 0 ||
        Number(price) <= 0 ||
        description.trim().length < 5
    ) {
       toast.error("Please fill all fields correctly")
       return
    }

    const updatedProduct = {
      ...product,
      title: title.trim(),
      image: image.trim(),
      category: category.trim(),
      price: Number(price),
      description: description.trim(),
    }

    const updatedProducts = products.map((p) =>
      String(p.id) === id ? updatedProduct : p
    )

    setproducts(updatedProducts)
    localStorage.setItem("products", JSON.stringify(updatedProducts))

    toast.success("Product is updated successfully")
    navigate(`/details/${id}`)
 }

 if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <h1 className="text-xl text-zinc-500">Loading...</h1>
      </div>
    )
 }

 const inputStyle = `
    w-full
    bg-zinc-50
    border border-zinc-200
    rounded-xl
    px-4 py-3
    text-zinc-800
    outline-none
    placeholder:text-zinc-400
    focus:border-blue-500
    focus:ring-2 focus:ring-blue-100
    transition-all duration-200
 `

 return (

    <div className="
       min-h-screen
       w-full
       bg-zinc-50
       flex items-center justify-center
       px-4 py-8
    ">

       {/* Centered Form Container */}
       <div className="
          w-full
          max-w-2xl
          mx-auto
          bg-white
          rounded-2xl
          border border-zinc-200
          shadow-sm
          p-5 sm:p-8 lg:p-10
       ">

          {/* Home Button */}
          <div className="mb-6">

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

          {/* Heading */}
          <div className="text-center mb-8">

             <h1 className="
                text-2xl sm:text-3xl
                font-bold
                text-zinc-900
             ">
                Edit Product
             </h1>

             <p className="text-sm text-zinc-500 mt-2">
                Update your product information below.
             </p>

          </div>

          {/* Form */}
          <form onSubmit={EditProductHandler}>

             {/* Image */}
             <div className="mb-5">

                <label className="block text-sm font-semibold text-zinc-700 mb-2">
                   Image URL
                </label>

                <input
                   type="url"
                   placeholder="Enter product image link"
                   className={inputStyle}
                   onChange={(e) => setimage(e.target.value)}
                   value={image}
                   required
                />

             </div>

             {/* Title */}
             <div className="mb-5">

                <label className="block text-sm font-semibold text-zinc-700 mb-2">
                   Product Title
                </label>

                <input
                   type="text"
                   placeholder="Enter product title"
                   className={inputStyle}
                   onChange={(e) => settitle(e.target.value)}
                   value={title}
                   required
                />

             </div>

             {/* Category and Price */}
             <div className="
                grid grid-cols-1 sm:grid-cols-2
                gap-5 mb-5
             ">

                <div>

                   <label className="block text-sm font-semibold text-zinc-700 mb-2">
                      Category
                   </label>

                   <input
                      type="text"
                      placeholder="Enter category"
                      className={inputStyle}
                      onChange={(e) => setcategory(e.target.value)}
                      value={category}
                      required
                   />

                </div>

                <div>

                   <label className="block text-sm font-semibold text-zinc-700 mb-2">
                      Price ($)
                   </label>

                   <input
                      type="number"
                      min="0.01"
                      step="0.01"
                      placeholder="Enter price"
                      className={inputStyle}
                      onChange={(e) => setprice(e.target.value)}
                      value={price}
                      required
                   />

                </div>

             </div>

             {/* Description */}
             <div className="mb-8">

                <label className="block text-sm font-semibold text-zinc-700 mb-2">
                   Product Description
                </label>

                <textarea
                   placeholder="Enter product description here..."
                   onChange={(e) => setdescription(e.target.value)}
                   value={description}
                   className={`${inputStyle} resize-y`}
                   rows="5"
                   required
                ></textarea>

             </div>

             {/* Buttons */}
             <div className="flex flex-col sm:flex-row gap-3">

                <button
                   type="submit"
                   className="
                      flex-1
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
                   Update Product
                </button>

                <button
                   type="button"
                   onClick={() => navigate(-1)}
                   className="
                      flex-1
                      py-3 px-6
                      bg-zinc-100
                      text-zinc-700
                      font-semibold
                      rounded-xl
                      hover:bg-zinc-200
                      transition-all duration-200
                   "
                >
                   Cancel
                </button>

             </div>

          </form>

       </div>

    </div>
 )
}

export default Edit
