import React from 'react'
import { category } from '../../category'

function Category() {
  return (
    <div>
        <h1>Category Product</h1>
        {
                category.map((elem, index) => {
                    return (
                        <ul style={{margin: 0}}>
                            <li key={index}>{elem}</li>
                        </ul>
                    )
                })
              }
    </div>
  )
}

export default Category