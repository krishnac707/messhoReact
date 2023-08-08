import React, { useEffect, useState } from 'react';
import './SingleProduct.css'
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import range from './../../images/range.jpg';


const SingleProduct = () => {

    const [allProducts, setAllProducts] = useState([]);
    const { id } = useParams();
    const [singleproduct, setSingleProduct] = useState({});
    const [userdata, setUserData] = useState();
    const [isuserLogin, setUserLogin] = useState(false);
    const [currentEmail, setCurrentEmail] = useState("");
    const router = useNavigate();

    useEffect(() => {
        const product = JSON.parse(localStorage.getItem("Products"));
        if (product) {
            for (var i = 0; i < product.length; i++) {
                setAllProducts(product);
            }
        }
    }, [])

    useEffect(() => {
        if (id && allProducts.length) {
            const result = allProducts.find((product) => product.id == id)
            // console.log(result, "result");
            setSingleProduct(result);
        }
    }, [allProducts, id])

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("CurrentUser"));
        if (user) {
            setUserLogin(true);
            setUserData(user);
            setCurrentEmail(user?.email);
        }
    }, [])

    const cartProduct = () => {
        if (isuserLogin) {
            if (userdata?.role == "Buyer") {
                const alluser = JSON.parse(localStorage.getItem("Users"));
                for (var i = 0; i < alluser.length; i++) {
                    if (alluser[i].email == currentEmail) {
                        alluser[i]?.cart.push(singleproduct);
                        localStorage.setItem("Users", JSON.stringify(alluser));
                        toast.success("Product Added Successfully");
                        router("/");
                        break;
                    }
                }
            }
            else {
                toast.error("Sorry!!! You are a seller. you won't be able to buy product")
            }
        }
        else {
            toast.error("please login first");
            router('/login');
        }
    }

    const redirect = (id) => {
        router(`/update-product/${id}`);
    }

    return (
        <div>
            {singleproduct &&
                <div className="singleMenWholeProduct">
                    <div className="singleMenleftsideProduct">
                        <div className="singleMenBigLeftImage">
                            <div className="bigTshirtImage">
                                <img src={singleproduct.image} alt="" />
                            </div>
                            <div className="menAddToCart">
                                {userdata?.role == "Seller" ? <button className='menAddToCartButton' onClick={() => redirect(singleproduct.id)}>Update product</button> :
                                    <button className="menAddToCartButton"><b><FontAwesomeIcon icon={faCartShopping} className='iconCenter' />&nbsp; Add to Cart</b></button>
                                }
                                <button className="menAddToCartBuyNow" onClick={cartProduct}>
                                    <b>&gt;&gt; Buy Now</b>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="singleMenRightsideProduct">
                        <div className="sportyTshirtDescription">
                            <div className="sportyTshirtNameDescription">
                                <p className="lightText sportyTshirtName"><b>{singleproduct.name}</b></p>
                                <p className="darkText menTshirtPrice"><b>Rs. {singleproduct.price}</b></p>
                                <div className="menTshirtDescriptionReview">
                                    <p><b>3.8 &#9734;</b></p>
                                    <p className="lightText" style={{ fontSize: "12px", marginTop: "8px" }}>&nbsp;&nbsp;34946 Ratings,
                                        5129 Reviews
                                    </p>
                                </div>
                                <p className="darkText" style={{ fontSize: "13px", marginBottom: "4%" }}><b>Free Delivery</b></p>
                            </div>
                        </div>
                        <div className="menTshirtSelectSize">
                            <div className="menTshirtSelectSizePosition">
                                <p className="darkText menTshirtSelectSizeHeading">
                                    Select Size
                                </p>
                                <div className="menTshirtDifferentSize">
                                    <div className="tshirtWidthSSize darkText">
                                        <p><b>S</b></p>
                                    </div>
                                    <div className="tshirtWidthMSize darkText">
                                        <p><b>M</b></p>
                                    </div>
                                    <div className="tshirtWidthLSize darkText">
                                        <p><b>L</b></p>
                                    </div>
                                    <div className="tshirtWidthXLSize darkText">
                                        <p><b>XL</b></p>
                                    </div>
                                    <div className="tshirtWidthXXLSize darkText">
                                        <p><b>XXL</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="menTshirtProductDetails">
                            <div className="menTshirtSportyDetail menTshirtSelectSizePosition">
                                <p className="darkText">Product Details</p>
                                <p>Name : sporty tshirt for men<br />

                                    "Fabric : Lycra Sleeve Length: Short Sleeves Pattern: Solid Net Quantity (N): 1 Sizes: S
                                    (Chest Size: 38 in, Length Size: 26 in) XL (Chest Size: 44 in, Length Size: 29 in) L (Chest
                                    Size: 42 in, Length Size: 28 in) M (Chest Size: 40 in, Length Size: 27 in) XXL (Chest Size:
                                    46 in, Length Size: 30 in) This roundneck half sleeves t shirt is available in trendy latest
                                    plain solid colors. fabric is quick-drying, -soft & has a more natural feel. Material wicks
                                    sweat & dries really fast. T-shirts for men are perfect for workout, athletic, gym,
                                    basketball, exercise, running, sports and casual wear. Country of Origin: India"
                                </p>
                                <p>More Information</p>
                            </div>
                        </div>

                        <div className="menTshirtProductDetails">
                            <div className="menTshirtSelectSizePosition menTshirtHomeLogo">
                                <p className="darkText">Sold By</p>
                                <div className="menTshirtHomeImage">
                                    <img src="https://images.meesho.com/images/pow/shop_100.webp" alt="" />
                                    <p className="darkText"><b>INDICLUB</b></p>
                                    <button><b>View Shop</b></button>
                                </div>
                                <div className="menRatingFollowerProducts">
                                    <div className="menTshirtRatingsCss">
                                        <div>
                                            <p><b>3.9 &#9734;</b></p>
                                        </div>
                                        <p className="lightText">48,038 Ratings</p>

                                    </div>
                                    <div className="menTshirtFollowerCss">
                                        <p className="darkText"><b>935</b></p>
                                        <p className="lightText">Followers</p>
                                    </div>
                                    <div className="menTshirtProductCss">
                                        <p className="darkText"><b>45</b></p>
                                        <p className="lightText">Products</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="menTshirtProductDetails">
                            <div className="menTshirtSelectSizePosition">
                                <p className="darkText menTshirtSelectSizeHeading">Product Ratings & Reviews</p>
                                <div className="menRangeRating">
                                    <div>
                                        <p>3.9 &#9734;</p>
                                        <p className="lightText">34946 Ratings,</p>
                                        <p className="lightText">5129 Reviews</p>
                                    </div>
                                    <div>
                                        <img src={range} alt="" />
                                    </div>
                                </div>
                                <div className="menFilterLine" style={{marginRight: "2%",marginBottom: "6%"}}>
                                </div>
                                <p className="customerRealImage darkText">Real Images and videos from customers</p>
                                <div className="menTshirtRealImage">
                                    <div><img
                                        src={singleproduct.image}
                                        alt="" /></div>
                                    <div><img
                                        src={singleproduct.image}
                                        alt="" /></div>
                                    <div><img
                                        src={singleproduct.image}
                                        alt="" /></div>
                                </div>
                                <div className="menFilterLine" style={{marginRight: "2%",marginBottom: "6%"}}></div>
                                <p className="viewAllReview darkText">VIEW ALL REVIEWS &gt;</p>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}

export default SingleProduct
