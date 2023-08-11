import React, { useState } from 'react'
import './ProductDetail.scss'
import { STATUS } from '../../utils/status'
import Error from '../Error/Error'
import Loader from '../Loader/Loader'
import { formatPrice } from '../../utils/helpers'

const ProductDetail = ({ product, status }) => {
    const imagesPerGroup = 4;
    const [mainImage, setMainImage] = useState(product?.imgUrlList?.[0]);
    const [currentGroupImg, setCurrentGroupImg] = useState(1);
    const totalImages = product?.imgUrlList?.length || 0;
    const totalGroupImg = Math.ceil(totalImages / imagesPerGroup);
    const startIndex = (currentGroupImg - 1) * imagesPerGroup;
    const endIndex = Math.min(currentGroupImg * imagesPerGroup, totalImages);
    const handleNextGroupImg = () => setCurrentGroupImg(group => group + 1);
    const handlePrevGroupImg = () => setCurrentGroupImg(group => group - 1);
    const handleImageClick = (imgUrl) => setMainImage(imgUrl);
    if (status === STATUS.ERROR) return (<Error />)
    if (status === STATUS.LOADING) return (<Loader />)
    return (
        <div className='product-detail'>
            <div className="product-img">
                <img id="main-img-product" src={mainImage || product?.imgUrlList?.[0]} alt="" />

                <div className="flex flex-center mt-1 other-img-detail">
                    {totalGroupImg > 1 && (
                        <div className="text-center">
                            {startIndex > 0 && (

                                <button
                                    className="btn btn-primary mt-3 me-3"
                                    style={{ borderRadius: '0', borderColor:'#fff', width: '40px', height: '40px', padding: '0' }}
                                    onClick={handlePrevGroupImg}
                                >
                                    <i className="fa-solid fa-arrow-left" style={{ fontSize: '17px' }}></i>
                                </button>
                            )}
                        </div>
                    )}
                    {
                        product?.imgUrlList?.slice(startIndex, endIndex).map(imgUrl => (
                            <div className="small-img-col m-2">
                                <img width="100%" src={imgUrl} alt="" onClick={() => handleImageClick(imgUrl)}/>
                            </div>
                        ))
                    }
                    {totalGroupImg > 1 && (
                        <div className="text-center">
                            {currentGroupImg < totalGroupImg && (
                                <button
                                    className="btn btn-primary mt-3"
                                    style={{ borderRadius: '0', borderColor:'#fff', width: '40px', height: '40px', padding: '0' }}
                                    onClick={handleNextGroupImg}
                                >
                                    <i className="fa-solid fa-arrow-right" style={{ fontSize: '17px' }}></i>
                                </button>
                            )
                            }

                        </div>

                    )}
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
                            <option value={inventory.size} disabled={inventory.quantity <= 0} >{inventory.size} - In stock: {inventory.quantity}</option>
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