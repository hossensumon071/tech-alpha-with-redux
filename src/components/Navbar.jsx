import { Link } from 'react-router-dom';
import {BsCart3} from 'react-icons/bs'


const Navbar = () => {
  return (
      <div className="navbar-bg bg-violet-700 text-violet-50 h-20 flex justify-center items-center">
        <div className="navbar container mx-auto flex items-center justify-between">
          <div className="left">
            <span className="text-xl font-bold">
              Tech<span className="text-orange-500">Alpha</span>
            </span>
          </div>
          <div className="right flex items-center gap-5">
            <Link to="/" className='nav-link hover:text-orange-500 duration-300'>Home</Link>
            <Link to="/products" className='nav-link hover:text-orange-500 duration-300'>Products</Link>
            <Link to="/cart">
            <span className="cart-icon relative">
              <BsCart3 />
              <span className="cart-counter absolute z-[1] top-1 -right-7 text-xs bg-orange-600 h-5 w-5 rounded-full flex items-center justify-center font-medium">
                10
              </span>
            </span>
          </Link>
          </div>
        </div>
      </div>
  );
};

export default Navbar;