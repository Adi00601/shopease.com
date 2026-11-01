
import React, { useContext, useState } from 'react'
import { productcontext } from '../Utilis/Context'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Create() {

 const navigate = useNavigate()
 const [products, setproducts] = useContext(productcontext)

 const [title, settitle] = useState("")
 const [image, setimage] = useState("")
 const [category, setcategory] = useState("")
 const [price, setprice] = useState("")
 const [description, setdescription] = useState("")

 const AddProductHandler = (e) => {
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

    const product = {
      id: nanoid(),
      title: title.trim(),
      image: image.trim(),
      category: category.trim(),
      price: Number(price),
      description: description.trim(),
    }

    const updatedProducts = [...(products || []), product]

    setproducts(updatedProducts)
    localStorage.setItem("products", JSON.stringify(updatedProducts))

    toast.success("Product created successfully")

    settitle("")
    setimage("")
    setcategory("")
    setprice("")
    setdescription("")

    navigate("/")
 }

 const inputStyle = "w-full bg-zinc-100 border border-zinc-200 rounded-xl px-4 py-3 text-base outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100 placeholder:text-zinc-400"

 return (
    <div className="min-h-screen w-full bg-zinc-50 flex items-center justify-center px-4 py-8">

      <form
        onSubmit={AddProductHandler}
        className="w-full max-w-2xl bg-white p-5 sm:p-8 md:p-10 rounded-2xl shadow-lg border border-zinc-100 flex flex-col gap-5"
      >

        <div className="text-center mb-2">
          <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-800">
            Add New Product
          </h1>
          <p className="text-sm text-zinc-500 mt-2">
            Fill in the details to add a new product to your store.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">
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

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
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
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Price
            </label>
            <input
              type="number"
              placeholder="Enter price"
              min="0.01"
              step="any"
              className={inputStyle}
              onChange={(e) => setprice(e.target.value)}
              value={price}
              required
            />
          </div>

        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">
            Description
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

        <button
          type="submit"
          className="w-full py-3 px-5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition duration-200 shadow-sm"
        >
          Add New Product
        </button>

        <button
          type="button"
          onClick={() => navigate("/")}
          className="w-full py-3 px-5 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-medium rounded-xl transition"
        >
          Cancel
        </button>

      </form>

    </div>
 )
}

export default Create
