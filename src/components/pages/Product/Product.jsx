import { Link } from 'react-router-dom'
import './Product.css'
import Chart from '../../chart/Chart'
import { productData } from '../../../dummyData'

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to='/'>
          <button className="productAddButton">Add New Product</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey='Sales' title='Sales Performance' />
        </div>
        <div className="productTopRight"></div>
      </div>
      <div className="productBottom">Bottom</div> 
    </div>
  )
}
