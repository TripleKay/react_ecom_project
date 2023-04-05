import React from 'react'
import '../Banner/Banner.css'
const Banner = () => {
  return (
    <div>
        <div className="bg-cover bg-no-repeat bg-center py-36 banner_image">
            <div className="container flex justify-items-start">
                <div className="banner_text  text-start">
                    <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
                        New Men Outdoor Collection <br/>
                    </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam <br/>
                        accusantium perspiciatis, sapiente
                        magni eos dolorum ex quos dolores odio</p>
                    <div className="mt-12">
                        <div className="bg-primary inline-block border border-primary text-white px-8 py-3 font-medium 
                            rounded-md hover:bg-transparent hover:text-primary">Shop Now</div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner