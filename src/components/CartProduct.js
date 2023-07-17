import { useDispatch } from "react-redux";
import{removeItem} from "../Redux/Slice/CartSlice";
import { toast } from "react-hot-toast";
const CartProduct = ({ product }) => {
    
   
    const dispatch = useDispatch();
    const handleDelete = ()=>{
        dispatch(removeItem(product.id));
        toast.error("Item is Removed");
    }
    return (
        <div className=" flex items-center justify-between p-4  hover:scale-105 w-full gap-12 border-b-4">

            <div className="w-1/2">
                <img src={product.image} alt="" className="h-[180px] " />
            </div>

            <div className=" w-full">
                <p className="text-[20px] font-semibold">{product.title}</p>
                <p className="mt-4 ">{product.description.substr(0,100)}</p>
                <div className=" mt-4  flex  justify-between items-center">
                    <span className="text-[green]">${product.price}</span>
                    <button className="p-2 px-4 bg-slate-500 rounded-full text-white"
                     onClick={handleDelete}>Delete</button>
                     </div>
            </div>
        </div>
    )
}
export default CartProduct;