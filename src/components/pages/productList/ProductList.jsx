import './ProductList.css'
import { DeleteOutline, Edit } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from '../../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function ProductList() {
    const [data, setData] = useState(productRows);

     const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
    { field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
        return (
            <div className='productListItem'>
                <img src={params.row.img} className='productListImg' alt="" />
                {params.row.name}
            </div>
            )}
        },
    { field: 'stock', headerName: 'Stock', width: 180 },
    { field: 'status', headerName: 'Status', width: 120 },
        { field: 'price', headerName: 'Price', width: 200 },
            {
            field: 'action', headerName: 'Action', width: 200,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/product/' + params.row.id}>
                        <Edit className='productListEdit' />
                        </Link>
                        <DeleteOutline className='productListDelete' onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        },
    ];

    return (
        <div className="productList">
            <DataGrid
            rows={data}
            columns={columns}
              pageSize={5}
              checkboxSelection
              disableRowSelectionOnClick
            rowsPerPageOptions={[5]}
        />
      </div>
  )
}
