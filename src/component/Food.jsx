import React, { useState } from 'react'

const Food = ({ food,handleCart }) => {
    const [order, setOrder] = useState(false);

    const handleClick = () => {
        setOrder(!order);
        handleCart(food)

    }


    return (
        <div className={` ${order ? "bg-gradient-to-t from-red-300 to-green-200 rounded-2xl items-center text-green-500 font-semibold flex justify-center shadow-xl text-md p-5 italic" : "  rounded-2xl items-center text-green-500 font-semibold flex justify-center shadow-xl text-md p-5 italic bg-gradient-to-t from-white to-yellow-300"}`}>
            <div className=' space-y-2'>
                <h1><span className='font-bold text-red-500'>Name</span> : {food.strMeal}</h1>
                <p>
                    <span className='font-bold text-red-500' >   category</span>:{food.strCategory}
                </p>
                <div>
                    <img className='rounded-lg' src={food.strMealThumb} alt="" />
                </div>

                <p className='text-left text-base'><span className='font-bold text-red-500'>description</span>:{food.strInstructions.slice(0, 80)}........</p>
                <button onClick={handleClick} className='btn mt-2 p-2 rounded-lg text-red-600  bg-yellow-300 border-2 border-green-800 '>
                    {
                        order ? "ordered" : "buy-now"
                    }

                </button>

            </div>
           

        </div>
    )
}

export default Food