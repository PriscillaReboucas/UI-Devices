import { useParams } from "react-router-dom";

export const Product = () => {
    const {productName} = useParams();
    console.log(productName, 'here is the product')
    return (
        <h3>Product page</h3>
    )
}