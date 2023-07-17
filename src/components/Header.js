
import icon from "../icon.svg";
import { NavLink } from "react-router-dom";
import{FaShoppingCart} from"react-icons/fa";
import { useSelector } from "react-redux";
const Header = ()=>{

    const{cart} = useSelector((state)=>state);
           
    return(
            
            <div className=" w-[100vw] flex justify-around p-2 items-center bg-slate-500 text-white relative ">
                <NavLink to="/"><img src={icon} alt="" /></NavLink>    
                <div className="flex gap-2 items-center">
                <p className="text-[18px]"><NavLink to="/">Home</NavLink> </p>
                <div className="relative ">
                    <NavLink to="/cart"><FaShoppingCart className="text-2xl"/></NavLink>
                    <div
                     className= {` ${cart.length ?"absolute":"hidden" } text-xs w-5 h-5 rounded-full bg-green-500 -top-2 -right-1  flex justify-center items-center  animation-bounce ball`}>
                            {cart.length}
                    </div>
                </div>
                </div>
            </div>
           )
}

export default Header;