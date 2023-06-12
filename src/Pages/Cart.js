import React, {useContext} from 'react'
import CartItem from '../components/cart-item/cart-item'
import { MyContext } from '../Context/My-context'

function Cart() {

  const {cart, deleteToCard} = useContext(MyContext)

  console.log("cart>>>", cart);

  return (
    <div className='d-flex flex-wrap justify-content-between gap-4 mt-4'>
       {
        cart.map((elem, index) => {
          return <CartItem key={index} {...elem} onClick={() => deleteToCard(index)} children='Delete To Cart'/>
        })
       }
    </div>
  )
}

export default Cart