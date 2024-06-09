import { useEffect, useState } from 'react'
import Product from './components/Product'
import Navbar from './components/Navbar';
import './App.css'

function App() {
  const [products, setProducts] = useState([
    {
        image: "https://www.course-api.com/images/cart/phone-1.png",
        name: "Samsung Galaxy S8",
        price: 399.99,
        quantity: 1
    },
    {
        image: "https://www.course-api.com/images/cart/phone-2.png",
        name: "Google Pixel",
        price: 499.99,
        quantity: 1
    },
    {
        image: "https://www.course-api.com/images/cart/phone-3.png",
        name: "Xiaomi Redmi Note 2",
        price: 699.99,
        quantity: 1
    },
    {
        image: "https://www.course-api.com/images/cart/phone-4.png",
        name: "Samsung Galaxy S7",
        price: 599.99,
        quantity: 1
    }
  ]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;

    products.forEach((item, index) => {
      sum += (item.price * item.quantity);
    })

    setTotal(sum.toFixed(2));
  }, [products]);

  function increaseQuantity(index) {
    let temp = [...products];
    temp[index].quantity += 1;
    setProducts(temp);
  }

  function decreaseQuantity(index) {
    if(products[index].quantity > 1) {
      let temp = [...products];
      temp[index].quantity -= 1;
      setProducts(temp);
    }
    else {
      removeProduct(index);
    }
  }

  function removeProduct(index) {
    let temp = [...products];
    temp.splice(index, 1);
    setProducts(temp);
  }

  function clearCart() {
    setProducts([]);
  }

  return(
    <div className='mb-10'>
      <Navbar quantity={products.length} />
      <p className='text-center text-4xl font-semibold'>YOUR BAG</p>
      {
        products.length > 0 ? 
        <div>
          <div className='my-10 flex flex-col gap-6'>
            {
              products.map((item, index) => {
                return <Product image={item.image} name={item.name} price={item.price} quntity={item.quantity} idx={index} incQt={increaseQuantity} decQt={decreaseQuantity} remove={removeProduct} key={index} />
              })
            }
          </div>
          <hr className='border-[0.1rem] border-blue-100 w-1/2 mx-auto' />
          <div className='flex flex-col items-center w-1/2 mx-auto'>
            <div className='flex justify-between w-full my-2 text-xl font-semibold'>
              <p>Total:</p>
              <p>${total}</p>
            </div>
            <button id='clear' className='bg-blue-600 py-2 px-4 rounded-lg text-blue-200 font-bold hover:bg-blue-200 hover:text-blue-600' onClick={clearCart}>Clear Cart</button>
          </div>
        </div> :
        <p className='text-center text-xl my-10'>is currently empty</p>
      }
    </div>
  )
}

export default App
