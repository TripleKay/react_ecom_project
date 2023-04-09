import React from 'react'
import '../Product/Product.css';
import {BiHeart,BiInfoCircle} from 'react-icons/bi';
const Product = ({product}) => {
  return (
    <div>
      <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
                <div className="product_image_container">
                    <img src={product.image} alt={product.title} className="product_image" />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    <div href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                        title="view product">
                        <BiInfoCircle></BiInfoCircle>
                    </div>
                    <div href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                        title="add to wishlist">
                        <BiHeart></BiHeart>
                    </div>
                </div>
            </div>
            <div className="pt-4 pb-3 px-4">
                <div href="#">
                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                        {product.title.substring(0,20)}
                    </h4>
                </div>
                <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-xl text-primary font-semibold">{product.price}</p>
                    <p className="text-sm text-gray-400 line-through">$55.90</p>
                </div>
                <div className="flex items-center">
                    <div className="flex gap-1 text-sm text-yellow-400">
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                    </div>
                    <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
            </div>
            <div href="#"
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                to cart</div>
        </div>
    </div>
  )
}

export default Product
