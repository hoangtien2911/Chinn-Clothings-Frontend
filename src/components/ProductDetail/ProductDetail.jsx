import React from 'react'
import './ProductDetail.scss'
import { STATUS } from '../../utils/status'
import Error from '../Error/Error'
import Loader from '../Loader/Loader'
import { formatPrice } from '../../utils/helpers'

const ProductDetail = ({ product, status }) => {
    if (status === STATUS.ERROR) return (<Error />)
    if (status === STATUS.LOADING) return (<Loader />)
    console.log(product);
    return (
        <div className='product-detail'>
            <div className="product-img">
                <img id="main-img-product" src={product?.imgUrlList?.[0]} alt="" />
                <div className="flex flex-center mt-1 other-img-detail">
                    {
                        product?.imgUrlList?.map(imgUrl => (
                            <div className="small-img-col m-2">
                                <img width="100%" src={imgUrl} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="product-info">
                <h4 style={{ fontWeight: '500' }}>Home / T-Shirt</h4>
                <h2 style={{ fontWeight: 'lighter', padding: '10px 0' }}>{product?.name}</h2>
                <h2>{formatPrice(product?.price)}</h2>
                <select className="mt-1 mb-1" name="" id="">
                    <option>Size</option>
                    {
                        product?.inventoryList?.map(inventory => (
                            <option value={inventory.size}>{inventory.size}</option>
                        ))
                    }
                </select>
                <div className="">
                    <input type="number" defaultValue={1} min={1} />
                </div>
                <button className="btn" style={{ borderRadius: '0', marginTop: '10px', padding: '10px 18px' }}>Add to cart</button>
                <button className="btn" style={{ borderRadius: '0', marginTop: '10px', marginLeft: '10px', padding: '10px 18px', backgroundColor: '#e5345b', color: '#fff', borderColor: '#e5345b' }}>Go to cart</button>
                <h4 className="mt-4 fs-20">Details</h4>
                <div className="">
                    <span>
                        {product?.description}
                    </span>
                </div>
            </div>
        </div >
    )
}

export default ProductDetail;