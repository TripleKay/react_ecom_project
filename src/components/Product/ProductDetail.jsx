import React, { useEffect } from 'react'
import '../Product/ProductDetail.css';
import { useParams } from 'react-router'
import {api} from '../../api/index';
import { useDispatch, useSelector } from 'react-redux';
import {getProductDetail, selectedProduct} from '../../features/products/productSlice';


const ProductDetail = () => {
  const {productId} = useParams();
  const dispatch = useDispatch();

  const productData = useSelector(getProductDetail);
  const getProduct = async () => {
    const res = await api.get(`https://fakestoreapi.com/products/${productId}`);
    console.log(res.data);
    dispatch(selectedProduct(res.data));
  } 
  useEffect(()=>{
    getProduct();
  },[]);


  return (
    <>
          <div className="container grid grid-cols-2 gap-6 py-10 text-start">
        <div>
          <div className="product_image_container">
            <img src={productData.image} alt="product" className="product_image" />
          </div>
            <div className="grid grid-cols-5 gap-4 mt-4">
                <img src={productData.image} alt="product2"
                    className="w-full cursor-pointer border border-primary" />
                <img src={productData.image} alt="product2" className="w-full cursor-pointer border" />
                <img src={productData.image} alt="product2" className="w-full cursor-pointer border" />
                <img src={productData.image} alt="product2" className="w-full cursor-pointer border" />
                <img src={productData.image} alt="product2" className="w-full cursor-pointer border" />
            </div>
        </div>

        <div>
            <h2 className="text-3xl font-medium uppercase mb-2">{productData.title}</h2>
            <div className="space-y-2">
                <p className="text-gray-800 font-semibold space-x-2">
                    <span>Availability: </span>
                    <span className="text-green-600">In Stock</span>
                </p>
                <p className="space-x-2">
                    <span className="text-gray-800 font-semibold">Brand: </span>
                    <span className="text-gray-600">---</span>
                </p>
                <p className="space-x-2">
                    <span className="text-gray-800 font-semibold">Category: </span>
                    <span className="text-gray-600">{productData.category}</span>
                </p>
                
            </div>
            <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                <p className="text-xl text-primary font-semibold">$ {productData.price}</p>
            </div>

            <p className="mt-4 text-gray-600">{productData.description}</p>

            <div className="pt-4">
                <h3 className="text-sm text-gray-800 uppercase mb-1">Size</h3>
                <div className="flex items-center gap-2">
                    <div className="size-selector">
                        <input type="radio" name="size" id="size-xs" className="hidden" />
                        <label for="size-xs"
                            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XS</label>
                    </div>
                    <div className="size-selector">
                        <input type="radio" name="size" id="size-sm" className="hidden"/>
                        <label for="size-sm"
                            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">S</label>
                    </div>
                    <div className="size-selector">
                        <input type="radio" name="size" id="size-m" className="hidden"/>
                        <label for="size-m"
                            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">M</label>
                    </div>
                    <div className="size-selector">
                        <input type="radio" name="size" id="size-l" className="hidden"/>
                        <label for="size-l"
                            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">L</label>
                    </div>
                    <div className="size-selector">
                        <input type="radio" name="size" id="size-xl" className="hidden"/>
                        <label for="size-xl"
                            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XL</label>
                    </div>
                </div>
            </div>

            <div className="pt-4">
                <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Color</h3>
                <div className="flex items-center gap-2">
                    <div className="color-selector">
                        <input type="radio" name="color" id="red" className="hidden"/>
                        <label for="red"
                            className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                            style={{backgroundColor: "#fc3d57"}} ></label>
                    </div>
                    <div className="color-selector">
                        <input type="radio" name="color" id="black" className="hidden"/>
                        <label for="black"
                            className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                            style={{backgroundColor: "#000"}}></label>
                    </div>
                    <div className="color-selector">
                        <input type="radio" name="color" id="white" className="hidden"/>
                        <label for="white"
                            className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                            style={{backgroundColor: "#fff"}}></label>
                    </div>

                </div>
            </div>

            <div className="mt-4">
                <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
                <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                    <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                    <div className="h-8 w-8 text-base flex items-center justify-center">4</div>
                    <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                </div>
            </div>

            <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
                <div href="#"
                    className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
                    <i className="fa-solid fa-bag-shopping"></i> Add to cart
                </div>
                <div href="#"
                    className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition">
                    <i className="fa-solid fa-heart"></i> Wishlist
                </div>
            </div>

            <div className="flex gap-3 mt-4">
                <div href="#"
                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div href="#"
                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i className="fa-brands fa-twitter"></i>
                </div>
                <div href="#"
                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    </div>

    </>
    
  )
}

export default ProductDetail