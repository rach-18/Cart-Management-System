function Product({image, name, price, quntity, incQt, decQt, idx, remove}) {
    return(
        <div className='flex items-center justify-between w-1/2 mx-auto'>
          <div className='flex gap-10 items-center'>
            <div className="w-[15%]">
                <img className='' src={image} alt="" />
            </div>
            <div className="w-full">
              <p>{name}</p>
              <p>${price}</p>
              <button className="text-blue-400" onClick={() => remove(idx)}>Remove</button>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <button onClick={() => incQt(idx)}><i className="fa-solid fa-chevron-up text-blue-500"></i></button>
            <p>{quntity}</p>
            <button onClick={() => decQt(idx)}><i className="fa-solid fa-chevron-down text-blue-500"></i></button>
          </div>
        </div>
    )
}

export default Product;
