import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


const AddProduct = () => {

    const [productData, setproductData] = useState({ name: '', price: '', image: '', category: 'Others' })
    const router = useNavigate();

    const handleValue = (event) => {
        setproductData({ ...productData, [event.target.name]: event.target.value })
    }

    const selectCategory = (event) => {
        setproductData({ ...productData, ["category"]: event.target.value })
    }

    const formSubmit = (event) => {
        event.preventDefault();
        if (productData.name && productData.price && productData.image) {
            const product = JSON.parse(localStorage.getItem("Products")) || [];
            const randomId = uuidv4();
            productData["id"] = randomId;
            product.push(productData)
            localStorage.setItem("Products", JSON.stringify(product));
            toast.success("Product added  Successfully");
            router("/");
        }
        else {
            toast.error("Please Fill All Detail");
        }

    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("CurrentUser"));
        if (user) {
            if (user?.role == "Buyer") {
                toast.error("You are not a seller");
                router('/')
            }
        }
        else {
            toast.error("Please login first");
            router('/login')
        }
    }, [])

    return (
        <div className="loginDiv">
            <div className="loginForm">
                <img src="https://images.meesho.com/images/marketing/1661417516766.webp" className="imageSize" alt="" />
                <div className="loginpage">
                    <p className="loginHeading"><b>Add Product</b></p>
                    <form onSubmit={formSubmit}>
                        <input type="text" className="inputCss" name="name" onChange={handleValue} placeholder="Product Name" />
                        <input type="number" className="inputCss" name="price" onChange={handleValue} placeholder="Product Price" />
                        <input type="text" className="inputCss" name="image" onChange={handleValue} placeholder="Product Image" />
                        <select className='form-select-css' onChange={selectCategory}>
                            <option value="Others">Others</option>
                            <option value="Mens">Mens</option>
                            <option value="Womens">Women</option>
                            <option value="Kids">Kids</option>
                        </select>
                        <input type='submit' className="buttonCss buttonMargin" value="Add Product" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct