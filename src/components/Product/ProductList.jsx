import React, { useEffect, useState } from 'react'
import Product from './Product'
import { useDispatch, useSelector } from 'react-redux'
import {api} from '../../api/index';
import {fetchProducts,getAllProducts} from '../../features/products/productSlice';
import '../Product/ProductList.css';

const ProductList = () => {
    const [loading,setLoading] = useState([true]);
    const dispatch = useDispatch();

    const productData = useSelector(getAllProducts);
    
    const getProducts = async () => {
        const res = await api.get('https://fakestoreapi.com/products');
        console.log(res.data);
        dispatch(fetchProducts(res.data));
        setLoading(false);
    }

    useEffect(()=>{
      getProducts();
    },[]);

  return (


    <div>
        {
          loading ? <div className='loading_container py-5'>
            <div className="w-12 h-12 rounded-full animate-spin border-8 border-solid border-primary border-t-transparent"></div>
          </div>  : 
         <div className='container py-5'>
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6 text-start">recomended for you</h2>
        <div className='grid grid-cols-4 gap-6'>
          {
            productData.map((item,key) => (
              <Product key={key} product={item}></Product>
              ))
          }
        </div>
      </div>
            }
    </div>
  )
}

export default ProductList