import React from 'react'
import { spinner } from '../../utils/images';
import "./Loader.scss";
import { BeatLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className='container'>
        <div className = "flex flex-center loader">
          {/* LOADING... */}
            {/* <img src = {spinner} alt = "loader" /> */}
            <BeatLoader color="#e5345b" />
        </div>
    </div>
  )
}

export default Loader;
