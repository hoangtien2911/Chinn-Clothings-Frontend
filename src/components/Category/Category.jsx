import React from 'react'
import "./Category.scss"

const Category = () => {
  return (
    <div id='collection' className="flex flex-wrap flex-center mt-5">
      <button type="button" className="btn m-2 text-dark active-filter-btn">All</button>
      <button type="button" className="btn m-2 text-dark">Best Sellers</button>
      <button type="button" className="btn m-2 text-dark">Featured</button>
      <button type="button" className="btn m-2 text-dark">New Arrival</button>
    </div>
  )
}

export default Category;