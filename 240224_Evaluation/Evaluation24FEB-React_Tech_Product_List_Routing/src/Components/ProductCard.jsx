import { Link } from 'react-router-dom'

export default function ProductCard({ brand, category, price, id }) {
    return (
        <tr data-testid="item">
            <td>{id}</td>
            <td data-testid="brand">
                <Link to={`/dashboard/${id}`}>{brand}</Link>
                {/* //     add Link here and keep the data-testid="brand" on Link tag       */}
            </td>
            <td data-testid="category">
                {category}
            </td>
            <td data-testid="price">
                {price}
            </td>
        </tr>
    )
}