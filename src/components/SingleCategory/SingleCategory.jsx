import React from 'react'
import './SingleCategory.scss'
import { STATUS } from '../../utils/status';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import { formatPrice, scrollToTop } from '../../utils/helpers'
import { Link } from 'react-router-dom';

const SingleCategory = ({ products, status }) => {
  if (status === STATUS.ERROR) return (<Error />);
  if (status === STATUS.LOADING) return (<Loader />);
  return (
    <div className="collection-list mt-4 grid">
      {
        products?.map(product => (
          <div className="p-2 best">
            <div className="collection-img" style={{ position: 'relative', overflow: 'hidden' }}>
              <Link to={`/product/${product.id}`} onClick={scrollToTop} >
                <img src={product.imgUrl} alt="" className="w-100" />
              </Link>
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
              <Link to={`/product/${product.id}`} onClick={scrollToTop} >
                <button type="button" className='btn btn-primary mt-2'>
                  <span className='btn-text'>Shop now</span>
                </button>
              </Link>

            </div>
          </div>
        ))
      }

    </div>

  )
}
export default SingleCategory;