function Navbar({quantity}) {
    return(
        <div className="flex justify-between px-20 py-5 bg-blue-400 mb-10 sticky top-0">
            <p className="text-2xl font-bold text-white">UseReducer</p>
            <div className="text-2xl text-white relative">
                <p className="absolute z-[1] text-lg bg-blue-100 text-blue-400 right-[-50%] top-[-30%] rounded-full w-6 h-6 flex items-center justify-center">{quantity}</p>
                <i className="fa-solid fa-cart-plus"></i>
            </div>
        </div>
    )
}

export default Navbar;
