import React, { useEffect, useState } from 'react';
import images from './../../images/downloadApplication.jpg';
import './Home.css';
import womenFashion from './../../images/womenFashion.jpg';
import essential from './../../images/essential.jpg';
import newstyle from './../../images/newStyle.jpg';
import normalpic from './../../images/normalPic.jpg';
import registerImage from './../../images/registerImage.jpg';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [allproduct, setAllProduct] = useState();
    const router = useNavigate();

    useEffect(() => {
        const product = JSON.parse(localStorage.getItem('Products'));
        if (product) {
            setAllProduct(product);
        }
    }, [])

    const redirect = (id) => {
        router(`/single-product/${id}`)
    }

    return (
        <div className='home-body'>
            <div className="slideImage">
                <img src={images} alt="" />
            </div>
            <div className="slideHeading">
                <div className="lineDiv"></div>
                <div className="slideHeadingText">
                    <h2>Top Categories to choose from</h2>
                </div>
                <div className="lineDiv"></div>
            </div>

            <div className="slideImageSubHeading">
                <img src={womenFashion} alt="" />
            </div>
            <div className="slideImageSubHeading">
                <img src={essential} alt="" />
            </div>
            <div className="slideImageSubHeading">
                <img src={newstyle} alt="" />
            </div>
            <div className="slideImageSubHeading">
                <img src={normalpic} alt="" />
            </div>
            <div className="slideImage">
                <img src={registerImage} alt="" />
            </div>

            <div className="product-header">
                <p>Products For You</p>
            </div>

            <div className="productFilter">
                <div className="filter">
                    <div className="sortBy">
                        <div className="sortByMargin">
                            <p><span className="lightText">Sortby:</span><span className="darkText">Relevance</span></p>
                            <p><i className="arrow down"></i></p>
                        </div>
                    </div>
                    <div className="sortBy">
                        <div className="allProductFilter">
                            <p className="darkText filterSize filterCount">FILTERS</p>
                            <p className="lightText tenProduct">1000+ products</p>
                        </div>
                        <div className="sortByMargin categories borderBottom">
                            <p className="darkText filterSize">Category</p>
                            <p><i className="arrow down"></i></p>
                        </div>
                        <div className="sortByMargin categories borderBottom">
                            <p className="darkText filterSize">Gender</p>
                            <p><i className="arrow down"></i></p>
                        </div>
                        <div className="sortByMargin categories borderBottom">
                            <p className="darkText filterSize">Fabric</p>
                            <p><i className="arrow down"></i></p>
                        </div>
                        <div className="sortByMargin categories borderBottom">
                            <p className="darkText filterSize">Oxfords</p>
                            <p><i className="arrow down"></i></p>
                        </div>
                        <div className="sortByMargin categories borderBottom">
                            <p className="darkText filterSize">dail_shape</p>
                            <p><i className="arrow down"></i></p>
                        </div>
                        <div className="sortByMargin categories borderBottom">
                            <p className="darkText filterSize">Color</p>
                            <p><i className="arrow down"></i></p>
                        </div>
                        <div className="sortByMargin categories borderBottom">
                            <p className="darkText filterSize">Price</p>
                            <p><i className="arrow down"></i></p>
                        </div>
                        <div className="sortByMargin categories borderBottom">
                            <p className="darkText filterSize">Meesho Mall</p>
                            <p><i className="arrow down"></i></p>
                        </div>
                        <div className="sortByMargin categories borderBottom">
                            <p className="darkText filterSize">Occassion</p>
                            <p><i className="arrow down"></i></p>
                        </div>
                        <div className="sortByMargin categories borderBottom">
                            <p className="darkText filterSize">combo of</p>
                            <p><i className="arrow down"></i></p>
                        </div>
                        <div className="sortByMargin categories borderBottom">
                            <p className="darkText filterSize">kurta_fabric</p>
                            <p><i className="arrow down"></i></p>
                        </div>
                        <div className="sortByMargin categories borderBottom">
                            <p className="darkText filterSize">Top Type</p>
                            <p><i className="arrow down"></i></p>
                        </div>
                        <div className="sortByMargin categories borderBottom">
                            <p className="darkText filterSize">Brand</p>
                            <p><i className="arrow down"></i></p>
                        </div>
                        <div className="sortByMargin categories borderBottom">
                            <p className="darkText filterSize">Compatible Models</p>
                            <p><i className="arrow down"></i></p>
                        </div>
                        <div className="sortByMargin categories">
                            <p className="darkText filterSize">Warranty Period</p>
                            <p><i className="arrow down"></i></p>
                        </div>

                    </div>
                </div>
                <div className="products">
                    {allproduct && allproduct.map((pro) => (
                        <div className="home-all-product" onClick={()=>redirect(pro.id)} >
                            <img src={pro.image} className="imageWidth" alt="" />
                            <div className="productDescription">
                                <p className="productname lightText">
                                    {pro.name}
                                </p>
                                <p className="paraPrice"><span className="darkText priceFont"><b>Rs. {pro.price}</b></span> <span
                                    className="lightText onward">onwards</span></p>
                                <p className="lightText delivery">Free Delivery</p>
                                <div className="ratingDiv">
                                    <div className="rating">
                                        <p><b>3.9&#9734;</b></p>
                                    </div>
                                    <p className="review lightText">37836 Reviews</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
