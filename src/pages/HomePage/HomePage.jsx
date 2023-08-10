import React, { useEffect, useState } from 'react';
import Slider from "../../components/Slider/Slider";
import "./HomePage.scss";
import Title from "../../components/Title/Title";
import Category from '../../components/Category/Category';
import ProductList from '../../components/ProductList/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveCategories, retrieveProductByCategory } from '../../store/categorySlice';
import SingleCategory from '../../components/SingleCategory/SingleCategory';
import Pagination from '../../components/Pagination/Pagination';

const HomePage = () => {
  //Allows to dispatch actions to update the Redux store
  const dispatch = useDispatch();

  //Hook to select data from the Redux store state
  const { data: categories, status: categoryStatus } = useSelector((state) => state.category);
  const { catProductAll: productsByCategory, catProductAllStatus } = useSelector((state) => state.category);
  const [categoryId, setCategoryId] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  // useEffect will only run once on the initial render.
  useEffect(() => {
    // fetch categories from the API and update the Redux store with the fetched data
    dispatch(retrieveCategories());
    dispatch(retrieveProductByCategory(categoryId, pageNumber, 'all'));
  }, [categoryId, pageNumber]);
  // the categoryId, pageNumber will only be updated and the API call will only be triggered if the selected categoryId, pageNumber is different from the current one
  return (
    <div className='home-page'>
      <Slider />
      <Title title="Collection" />
      <Category categories={categories} status={categoryStatus} onSelectCategory={setCategoryId} currentCategoryId={categoryId} newPageNumber={setPageNumber}/>
      <section>
        <SingleCategory products={productsByCategory.lists} status={catProductAllStatus} />
      </section>
      <Pagination pageNumber={pageNumber} totalPages={productsByCategory.totalPageNumber} onPageChange={setPageNumber} />
    </div>
  )
}

export default HomePage;