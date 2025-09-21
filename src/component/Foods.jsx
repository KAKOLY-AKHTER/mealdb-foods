import React, { use, useState } from 'react'
import Food from './Food';

const Foods = ({ foodsFetch }) => {
    const [cart, setCart] = useState([]);

    // const handleCart = (food) => {
    //     const newFood = [...cart, food];
    //     console.log(newFood);
    //     setCart(newFood)


    // }


    const handleCart = (food) => {
  const exists = cart.find(item => item.idMeal === food.idMeal);

  if (!exists) {
    const newFood = [...cart, food];
    setCart(newFood);
  } else {
    alert("Already in cart");
  }
};

       const handleRemoveFromCart = idMeal=> {
        // console.log('remove item from the cart', id)

        const remainingCart = cart.filter(food => food.idMeal !== idMeal);
        setCart(remainingCart);
        removeFromCart(id);
    }



    const foodsData = use(foodsFetch);
    const foods = foodsData.meals;
    console.log(foods);



    return (

        <div className=''>
            <div>
                <h1 className='text-center text-2xl  md:text-6xl font-bold uppercase italic bg-gradient-to-l from-yellow-500 to-red-700 
               text-transparent bg-clip-text'>
                    food collection
                </h1>
                <hr className='h-2 bg-green-600 items-center w-full  container mx-auto rounded-b-2xl' />
            </div>
            <div className='flex-12 flex flex-col-reverse md:flex-row gap-5 mt-5'>


                <div className='grid grid-cols-1 md:grid-cols-3 flex-grow gap-5  '>

                    {

                        foods.map(food => (
                            <Food key={food.idMeal} food={food} handleCart={handleCart}></Food>

                        ))
                    }

                </div>

                <div className='md:w-1/3 border-2 border-green-600 rounded-lg px-3 text-2xl text-red-500 font-bold italic'>
                    <h1>cart</h1>
                    <hr className='h-1 bg-green-600 items-center   container mx-auto rounded-b-2xl' />

                    <div className='mt-3'>
                        <h1>quantity : {cart.length}</h1>

                        <ol className=''>
                            {
                                cart.map(food => (
                                    <div key={food.idMeal} className='flex justify-between items-center mb-3 mt-5'>
                                        <div className='text-green-600 text-base'>{food.strMeal}</div>
                                        <img className='h-16 w-16 rounded-lg' src={food.strMealThumb} alt={food.strMeal} />
                                           <button onClick={()=>handleRemoveFromCart(food.idMeal)}>❌</button>

                                    </div>
                                ))
                            }


                        </ol>


                    </div>

                </div>
            </div>







        </div>

    )
}

export default Foods