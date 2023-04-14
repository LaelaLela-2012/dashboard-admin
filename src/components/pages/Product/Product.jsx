import { Link } from 'react-router-dom'
import './Product.css'
import Chart from '../../chart/Chart'
import { productData } from '../../../dummyData'
import { Publish } from '@mui/icons-material'

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to='/newProduct'>
          <button className="productAddButton">Add New Product</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey='Sales' title='Sales Performance' />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="https://media.istockphoto.com/id/1143541816/id/foto/headphone-pada-pengisian-daya.jpg?s=1024x1024&w=is&k=20&c=MWRszvYMvgaSqW-Tf4CbXIOpO76FoDWaDvTuKP3I8_A=" alt="" className="productInfoImg" />
          <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">1323</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder='Apple Airpods' />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src="https://media.istockphoto.com/id/1143541816/id/foto/headphone-pada-pengisian-daya.jpg?s=1024x1024&w=is&k=20&c=MWRszvYMvgaSqW-Tf4CbXIOpO76FoDWaDvTuKP3I8_A=" alt="" className="productUploadImg" />
              <label for='file'>
                <Publish />
              </label>
              <input type="file" id='file' style={{display:'none'
              }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div> 
    </div>
  )
}
