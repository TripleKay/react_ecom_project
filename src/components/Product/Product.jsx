import React from 'react'
import '../Product/Product.css';
import {BiHeart,BiInfoCircle} from 'react-icons/bi';
import { Link } from 'react-router-dom';
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
                    <Link to={`/products/${product.id}`}
                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                        title="view product">
                        <BiInfoCircle></BiInfoCircle>
                    </Link>
                    <div href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                        title="add to wishlist">
                        <BiHeart></BiHeart>
                    </div>
                </div>
            </div>
            <div className="pt-4 pb-3 px-4">
                <Link to={`/products/${product.id}`}>
                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                        {product.title.substring(0,20)}
                    </h4>
                </Link>
                <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-xl text-primary font-semibold">$ {product.price}</p>
                    {/* <p className="text-sm text-gray-400 line-through">$55.90</p> */}
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
