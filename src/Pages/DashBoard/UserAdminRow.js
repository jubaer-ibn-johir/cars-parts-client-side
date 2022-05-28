import React from 'react';
import { toast } from 'react-toastify';

const UserAdminRow = ({user, index, refetch}) => {

  const {email,role} = user;
  const makeAdmin = () => {
      fetch(`http://localhost:5000/user/admin/${email}`,{
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
      })
      .then(res => res.json())
      .then(data => {
          refetch();
          toast.success('successfully mad an admin')
      })
  }
    return (
        <tr>
        <th> {index + 1}</th>
        <td className='font-bold'>{email}</td>
        <td>{role === 'admin' ? <button class="btn btn-white text-white btn-xs ml-3">Admin</button>  : <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>} </td>
        <td><button class="btn btn-xs">Remove User</button></td>
      </tr>
    );
};

export default UserAdminRow;

