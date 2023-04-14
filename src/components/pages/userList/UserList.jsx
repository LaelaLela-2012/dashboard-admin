import { DeleteOutline, Edit, Visibility } from '@mui/icons-material';
import './UserList.css'
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from '../../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
        return (
            <div className='userListUser'>
                <img src={params.row.avatar} className='userListImg' alt="" />
                {params.row.username}
            </div>
            )}
    },
  { field: 'email', headerName: 'Email', width: 180 },
  { field: 'status', headerName: 'Status', width: 120 },
    { field: 'transaction', headerName: 'Transaction Volume', width: 200 },
        {
            field: 'action', headerName: 'Action', width: 200,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/user/' + params.row.id}>
                        <Edit className='userListEdit' />
                        </Link>
                        <DeleteOutline className='userListDelete' onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        },
    ];
    
  return (
      <div className="userList">
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
