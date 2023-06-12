import React, { useContext, useEffect } from 'react'
import { services } from '../../services/Services.js'
import { MyContext } from '../../Context/My-context.js'

function Nav() {
  const {getCategoriesState, categories} = useContext(MyContext)

  useEffect(() => {
    const data = async () => {
      const result = await services.getCategories()
      getCategoriesState(result.data)
    }
    data()
  }, [])
  

  return (
    <div className='nav-menu'>
        <h2>Category Product</h2>
        <ol>
          {
            categories.map((elem, index) =>{
              return <li key={index}>{elem}</li>
            })
          }
        </ol>
    </div>
  )
}

export default Nav