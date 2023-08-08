import React from 'react';
import './Footer.css';
import socialImage from './../../images/socialImages.jpg';

const Footer = () => {
    return (
        <div id="footer">
            <div className="shopNOnstop">
                <h1>Shop Non-stop On Meesho</h1>
                <p className="footerFont">Trusted by more than 1 Crore Indians
                    Cash on Delivery | Free Delivery</p>

                <div className="divImage">
                    <img src="https://images.meesho.com/images/pow/playstore-icon-big_400.webp" alt="" />
                    <img src="https://images.meesho.com/images/pow/appstore-icon-big_400.webp" alt="" />
                </div>
            </div>
            <div className="careers footerFont">
                <p className="careerMargin">Career</p>
                <p>Become a supplier</p>
                <p>Hall a Frame</p>

            </div>
            <div className="legal footerFont">
                <p className="careerMargin">Career</p>
                <p>Become a supplier</p>
                <p>Hall a Frame</p>
            </div>
            <div className="social">
                <p>Reach out to us</p>
                <img src={socialImage} alt="" />
            </div>
            <div className="contact">
                <p>Contact us</p>
                <p className="lightText" style={{fontSize: "12px"}}>Fashnear Technologies Private Limited,
                    CIN: U74900KA2015PTC082263
                    06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring Road, Bellandur, Varthur Hobli,
                    Bengaluru-560103, Karnataka, India
                    E-mail address: query@meesho.com
                    © 2015-2023 Meesho.com</p>
            </div>
        </div>
    )
}

export default Footer
