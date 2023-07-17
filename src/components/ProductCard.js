import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../Redux/Slice/CartSlice";
import { toast } from "react-hot-toast";
const ProductCard = ({ product }) => {

    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();
    const handleDelete = ()=>{
        dispatch(removeItem(product.id));
        toast.error("Item is Removed");
    }

    const handleAdd = ()=>{
        dispatch(addItem(product));
        toast.success("Item is Added");
    }
     
    return (
        <div>
            {
                    <div className=" flex flex-col items-center gap-3 justify-between shadow-lg shadow-slate-500  rounded-xl p-4  hover:scale-110 transition-all duration-300  h-[400px] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
                       
                        <p>{product.title.substr(0, 10)}...</p>
                        {/* <p>{product.description.split(" ").slice(0,10).join(" ")+"..."}...</p> */}
                        <p>{product.description.substr(0,50)+"..."}</p>
                       
                        <img src={product.image} alt="" className=" h-[180px]" />
                       
                        <div className="flex justify-between w-full items-center  mt-5">
                          
                            <span className="text-green-600 semi-bold">${product.price}</span>
                            {
                                
                                cart.some((p) => p.id == product.id) ? <button className="py-2 px-3 bg-slate-500 rounded-full text-white text-[13px] font-semibold" 
                                onClick={handleDelete}>Remove Item</button>: 
                                <button className="py-2 px-4 bg-slate-500 rounded-full text-white text-[13px] font-semibold "  onClick={handleAdd}>Add Item</button>


                            }
                        </div>
                    </div>
            }
        </div>
    )
}
export default ProductCard;

  