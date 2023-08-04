import React, { useEffect } from 'react'
import "./Category.scss"
import { useSelector, useDispatch } from "react-redux";
import { retrieveCategories} from "../../store/categorySlice";

const Category = () => {
  //Allows to dispatch actions to update the Redux store
  const dispatch = useDispatch();

  //Hook to select data from the Redux store state
  const { data: categories } = useSelector((state) => state.category);

  // useEffect will only run once on the initial render.
  useEffect(() => {
    // fetch categories from the API and update the Redux store with the fetched data
    dispatch(retrieveCategories());
  }, []);

  return (
    <div id='collection' className="flex flex-wrap flex-center mt-5">
      <button type="button" className="btn m-2 text-dark active-filter-btn">All</button>
      {categories.map((category) => (
        <button type="button" className="btn m-2 text-dark" key={category.id}>{category.name}</button>
      ))}
    </div>
  )
}

export default Category;