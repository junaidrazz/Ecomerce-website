import { useState, useEffect, use } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getProductById } from "./data/product"
export default function(){

    const { id } =useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState(null)

    useEffect (()=> {
        const foundProduct = getProductById(id)

        if(!foundProduct){
            navigate("/")
            return;
        }


        setProduct(foundProduct)
    }, [id])

     if (!product) {
        return <div>Loading...</div>
    }

    return(
        <div className="page">
           <div className="container">
            <div className="product-detail">
                <div className="product-detail-img">
                    <img src={product.image} alt={product.name}/>
                </div>
                <div className="product-detail-content">
                    <h1 className="product-detail-name">{product.name}</h1>
                    <p className="product-detail-price">${product.price}</p>
                    <p className="product-detail-description">{product.description}</p>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>

            </div>
           </div>
        </div>
    )
}