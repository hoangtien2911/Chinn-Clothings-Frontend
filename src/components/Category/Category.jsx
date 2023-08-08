import React, { useEffect, useState } from 'react';
import "./Category.scss";
import { useSelector, useDispatch } from "react-redux";
import { retrieveCategories } from "../../store/categorySlice";
import { STATUS } from '../../utils/status';
import Error from '../Error/Error';
import Loader from '../Loader/Loader'

const Category = ({categories, status, onSelectCategory, currentCategoryId, newPageNumber }) => {
  const [isActiveAllButton, setIsActiveAllButton] = useState(true);
  
  if (status === STATUS.ERROR) return (<Error />)
  if (status === STATUS.LOADING) return (<Loader />)

  const handleButtonClick = (category) => {
    newPageNumber(1);
    setIsActiveAllButton(category === null);
    onSelectCategory(category === null ? 0 : category.id);
  };

  return (
    <div id='collection' className="flex flex-wrap flex-center mt-5">
      <button type="button" className={`btn m-2 ${isActiveAllButton ? 'active-filter-btn' : ''}`} onClick={() => handleButtonClick(null)}>All</button>
      {
        categories?.map((category) => 
          <button type="button" className={`btn m-2 ${currentCategoryId === category.id ? 'active-filter-btn' : ''}`} key={category.id} onClick={() => handleButtonClick(category)}>{category.name}</button>
        )
      }
    </div>
  )
}

export default Category;