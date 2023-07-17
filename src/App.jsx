
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { Routes,Route } from "react-router-dom";
const App = () => {
 
  return (
    <div className="overflow-x-hidden">
       <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
};

export default App;
