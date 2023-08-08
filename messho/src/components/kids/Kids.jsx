import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Kids = () => {

    const [kids, setKids] = useState();
    const router = useNavigate();

    useEffect(() => {
        const product = JSON.parse(localStorage.getItem("Products"));
        if (product) {
            const result = product.filter((singleProduct) => singleProduct.category == "Kids");
            setKids(result);
        }
    }, [])

    const redirect = (id) => {
        router(`/single-product/${id}`)
    }

    return (
        <div className='mens-main-body'>
            <div class="menTopWear">
                <h2 class="darkText">Kids Top Wear</h2>
                <p class="darkText"><b>Showing 1-20 out of 10000 products</b></p>
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
                    {kids && kids.map((pro) => (
                        <div className="home-all-product" onClick={() => redirect(pro.id)} >
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

export default Kids
