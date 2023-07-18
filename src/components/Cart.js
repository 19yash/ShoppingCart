import { useEffect, useState } from "react";
import CartProduct from "./CartProduct";


import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {

    const { cart } = useSelector((state) => state);

    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((accu, curr) => accu + curr.price, 0));
    }, [cart])

    const navigator = useNavigate();

    return (
        <div>

            {
                cart.length ?

                    <div className="flex flex-col  min-[870px]:flex-row gap-4 mt-6 w-11/12 mx-auto max-w-[1260px] p-4 min-h-[85vh]  justify-between  ">

                        <div className="flex flex-col gap-3 min-[870px]:w-[70%]  lg:w-[60%] item-center">
                            {
                                cart.map(
                                    (product) => (
                                        <CartProduct key={product.id} product={product} ></CartProduct>
                                    ))
                
                            }
                        </div>

                        <div className="flex flex-col min-[870px]:w-[30%]  lg:w-[30%] ">
                            <div className="mt-14  ">
                                <h2 className="text-[18px]">Your cart</h2>
                                <h1 className="text-[34px]">Summary</h1>
                                <p className="text-[18px] mt-4">Total Items : {cart.length}</p>
                            </div>

                            <div className="mt-4">
                                <p className="text-[18px] font-semibold">Total Ammount : ${totalAmount}</p>
                                <button className=" py-3 px-12 bg-slate-500 rounded-md text-white mt-5 text-[18px] ">Checkout Now</button>
                            </div>
                        </div>
                    </div> :
                    <div className=" w-screen h-[70vh] flex flex-col gap-2  justify-center items-center">
                        <p className="text-3xl">Cart is Empty</p>
                        <button onClick={() => { navigator("/") }} className=" text-[18px] py-2 px-6 rounded-full bg-slate-500 text-white
                        ">Shop Now</button>
                    </div>
            }
        </div>

    )
}
export default Cart;