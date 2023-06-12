import React, {useEffect, useContext} from 'react'
import CartItem from '../components/cart-item/cart-item'
import { services } from '../services/Services'
import { MyContext } from '../Context/My-context'

function Home() {

    const {products, getAllProductsState, addToCard, } = useContext(MyContext)

    useEffect(() => {
        const data = async () => {
            const product = await services.allProducts()
            // console.log("Product", product);
            getAllProductsState(product.data.products)
        }
        data();
    }, [])

    return (
        <div className='d-flex flex-wrap justify-content-between gap-4 mt-4'>
            {
                products.map((product, index) => {
                    return <CartItem key={index} {...product} onClick={() => addToCard(product.id)} children="Add To Card"/>
                })
            }
        </div>
    )
}

export default Home