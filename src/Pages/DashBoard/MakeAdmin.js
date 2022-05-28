import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserAdminRow from './UserAdminRow';

const MakeAdmin = () => {
    const {data: users, isLoading, refetch} = useQuery('users', ()=> fetch('https://sheltered-castle-28994.herokuapp.com/user').then(res=> res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    
    
    return (
        <div>
            <h2>All Users : {users.length}</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map((user, index) => <UserAdminRow
            key={user._id}
            user={user}
            index={index}
            refetch={refetch}
            
            ></UserAdminRow>)
        }
      {/* {

          users.map(user=> <tr>
            <th> 1</th>
            <td>{user.email}</td>
            <td></td>
            <td>Red</td>
          </tr>)
      } */}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MakeAdmin;