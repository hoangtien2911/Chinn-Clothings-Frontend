import React from 'react'
import './SingleCategory.scss'
import { useDispatch } from 'react-redux';
import { STATUS } from '../../utils/status';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import { formatPrice } from '../../utils/helpers'

const SingleCategory = ({ products, status }) => {
  // if(status === STATUS.ERROR) return (<Error />);
  if (status === STATUS.LOADING) return (<Loader />);
  // console.log('ddddddddddddweeeeeeee')
  // console.log(products)
  return (
    <div className="collection-list mt-4 grid">
      {
        products?.map(product => (
          <div className="p-2 best">
            <div className="collection-img" style={{ position: 'relative', overflow: 'hidden' }}>
              <a href="#"><img src={product.imgUrl} alt="" className="w-100" /></a>
              <span className="bg-primary text-white flex flex-center" style={{ position: 'absolute' }}>sale</span>
            </div>
            <div className="text-center">
              <div className="rating mt-3">
                <span className="text-primary"><i className="fas fa-star"></i></span>
                <span className="text-primary"><i className="fas fa-star"></i></span>
                <span className="text-primary"><i className="fas fa-star"></i></span>
                <span className="text-primary"><i className="fas fa-star"></i></span>
                <span className="text-primary"><i className="fas fa-star"></i></span>
              </div>
              <p className="text-capitalize mt-1 mb-1">{product.name}</p>
              <span className="fw-6" style={{ display: 'block' }}>{formatPrice(product.price)}</span>
              <button type="button" className='btn btn-primary mt-2'>
                <span className='btn-text'>Add To Cart</span>
              </button>
            </div>
          </div>
        ))
      }

    </div>

  )
}
export default SingleCategory;