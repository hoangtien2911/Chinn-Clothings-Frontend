import React from 'react'
import Slider from "../../components/Slider/Slider"
import "./HomePage.scss"
import Title from "../../components/Title/Title"
import Category from '../../components/Category/Category'

const HomePage = () => {
  return (
    <div className='home-page'>
      <Slider />
      <Title title="Collection" />
      <Category />
    </div>
  )
}

export default HomePage;