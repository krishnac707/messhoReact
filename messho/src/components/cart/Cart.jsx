import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {

    const [usercart, setUsercart] = useState([]);
    const [finalPrice, setFinalPrice] = useState();
    const router = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("CurrentUser"));
        if (user?.email) {
            const allUser = JSON.parse(localStorage.getItem("Users"));
            for (var i = 0; i < allUser.length; i++) {
                if (allUser[i].email == user.email && allUser[i].password == user.password) {
                    setUsercart(allUser[i].cart);
                    break;
                }
            }
        }
        else {
            toast.error("Please Login first to add product");
            router("/login");
        }
    }, [])

    useEffect(() => {
        var totalPrice = 0
        if (usercart?.length) {
            for (var i = 0; i < usercart.length; i++) {
                totalPrice = totalPrice + parseInt(usercart[i].price);
            }
            setFinalPrice(totalPrice);
        }
    }, [usercart])

    const buyProduct = () => {
        const user = JSON.parse(localStorage.getItem("CurrentUser"));
        if (usercart.length) {
            if (user?.email) {
                const allUser = JSON.parse(localStorage.getItem("Users"));
                for (var i = 0; i < allUser.length; i++) {
                    if (allUser[i].email == user.email && allUser[i].password == user.password) {
                        allUser[i].cart = [];
                        localStorage.setItem("Users", JSON.stringify(allUser));
                        break;
                    }
                }
                setFinalPrice(0);
                setUsercart([]);
                router('/')
                return toast.success("Product will delivered Soon!!!")
            }
        }
        else {
            toast.error("please add product first")
            router('/')
        }
    }

    const removeProduct = (id) => {
        const user = JSON.parse(localStorage.getItem("CurrentUser"));
        var removeItem;
        if (user?.email) {
            const allUser = JSON.parse(localStorage.getItem("Users"));
            for (var i = 0; i < allUser.length; i++) {
                if (allUser[i].email == user.email && allUser[i].password == user.password) {
                    removeItem = usercart.filter((item) => item.id !== id);
                    allUser[i].cart = removeItem;
                    localStorage.setItem("Users", JSON.stringify(allUser));
                    break;
                }
            }
        }
        setFinalPrice(0);
        setUsercart(removeItem);
    }

    return (
        <div>
            <div className="cartImageDetail">
                <div className="cartLeftImage">
                    {usercart?.length && <div className="cartItemDiv">
                        <div><p className="darkText">Cart</p></div>
                        <div><p className="lightText">{usercart?.length} Item</p></div>
                    </div>}
                    {usercart?.length && usercart.map((pro) => (
                        <div className="cartTshirtDetail">
                            <div className="leftImageCart">
                                <img src={pro.image} alt="" />
                            </div>
                            <div className="rightDescriptionTshirtCart">
                                <p className="darkText">{pro.name}</p>
                                <p className="darkText">Size:M &#x2022; Qty:1</p>
                                <p>Rs. {pro.price}</p>
                                <p className="darkText" style={{ cursor: "pointer" }} onClick={() => removeProduct(pro.id)}><span>x </span><span className="xCartCss"><b>REMOVE</b></span></p>
                            </div>
                            <div className="editCartCss">
                                <p>EDIT</p>
                            </div>
                        </div>
                    ))}
                    <div className="cartSoldBy">
                        <p >Sold By : Am Pasion</p>
                        <p>Free Delivery</p>
                    </div>
                </div>
                <div className="cartPriceDetail">
                    <p className="darkText"><b>Price Details</b></p>
                    <div>
                        <p>Total Product Price</p>
                        <p>Rs.{finalPrice}</p>
                    </div>
                    <div className="menFilterLine">
                    </div>
                    <div>
                        <p className="darkText"><b>Order Total</b></p>
                        <p className="darkText"><b>Rs.{finalPrice}</b></p>
                    </div>
                    <p>Clicking on ‘Continue’ will order your Product</p>
                    <button style={{cursor:"pointer"}} onClick={buyProduct}>Continue</button>
                    <img src="https://images.meesho.com/images/marketing/1588578650850.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Cart