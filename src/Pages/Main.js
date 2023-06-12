import { Routes, Route} from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import Products from '../components/products/Products'


function Main() {


  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart  />} />
            <Route path="/products/:products" element={<Products />} />
        </Routes>
    </div>
  )
}

export default Main