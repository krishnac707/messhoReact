import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const Updateproduct = () => {

    const { id } = useParams();
    const [productData, setproductData] = useState({});
    const [singleProduct, setSingleProduct] = useState();
    const router = useNavigate();

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

    const handlingForm = (event) => {
        setSingleProduct({ ...singleProduct, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        const product = JSON.parse(localStorage.getItem("Products"));
        if (product) {
            setproductData(product);
        }
    }, [])

    useEffect(() => {
        if (id && productData.length) {
            const result = productData.find((product) => product.id == id)
            console.log(result, "result");
            setSingleProduct(result);
        }
    }, [productData, id])

    const formValidation = () => {
        const product = JSON.parse(localStorage.getItem("Products"));
        for (var i = 0; i < product.length; i++) {
            if (product[i].id == id) {
                product[i].name = singleProduct.name;
                product[i].price = singleProduct.price;
                product[i].image = singleProduct.image;
            }
        }
        localStorage.setItem("Products", JSON.stringify(product));
        setSingleProduct({});
        router(`/single-product/${id}`);
        toast.success("product updated");

    }

    return (
        <div className="loginDiv">
            <div className="loginForm">
                <img src="https://images.meesho.com/images/marketing/1661417516766.webp" className="imageSize" alt="" />
                <div className="loginpage">
                    <p className="loginHeading"><b>Update Product</b></p>
                    <form onSubmit={formValidation}>
                        <input type="text" className="inputCss" value={singleProduct?.name} name="name" onChange={handlingForm} placeholder="Product Name" />
                        <input type="text" className="inputCss" value={singleProduct?.price} name="price" onChange={handlingForm} placeholder="Product Price" />
                        <input type="text" className="inputCss" name="image" value={singleProduct?.image} onChange={handlingForm} placeholder="Product Image" />
                        <input type='submit' className="buttonCss buttonMargin" value="Update Product" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Updateproduct
