function Cart({ className, text, title, image }) {
    return (
        <div className="text-black text-left rounded-lg  shadow-xl cursor-pointer min-w-80 snap-start">
            <div className={`${className} h-12 rounded-t-lg`}></div>
            <div className="pt-9 pl-6 pb-6 pr-6 relative">
                <div
                    className={`absolute border-8 border-white bg-white size-12 -top-6 left-4 rounded-lg ${image} bg-no-repeat bg-contain`}
                ></div>
                <h3 className="text-2xl font-medium mb-2">{title}</h3>
                <p className="text-base mt-2">{text}</p>
            </div>
        </div>
    );
}
export default Cart;
