import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProductPage() {

    const { product_id } = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    async function fetchSingleProduct() {
        setLoading(true)
        try {
            let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${product_id}`);
            const data = await res.json();
            setData(data.data);
            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
            console.log(error);
        }
    }

    useEffect(() => {
        fetchSingleProduct()
    })

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <h1>ERROR FETCH</h1>
    }
    return (
        <div data-testid="products-container">
            <div>
                <h3 data-testid="product-brand">{data.brand}</h3>
            </div>
            <div >
                <img data-testid="product-image" src={data.img} alt={data.brand} />
            </div>
            <div data-testid="product-category">{data.category}
            </div>

            <div data-testid="product-details">{data.details}
            </div>
            <div data-testid="product-price">{Float32Array.price}
            </div>

        </div>
    )
}
export default SingleProductPage