import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const AllUsers = () => {
    const {data:users=[], refetch} = useQuery({
        queryKey: 'users',
        queryFn: ()=> 
        fetch('https://doctor-s-portal-server-jlvo7vylc-nicchy123.vercel.app/users')
        .then(data=>data.json())
     
    })
    const handleMakeAdmin = (id)=>{
        fetch(`https://doctor-s-portal-server-jlvo7vylc-nicchy123.vercel.app/user/admin/${id}`,{
            method: "PUT",
            headers: {
                autherization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount> 0){
                toast.success("make admin successfull")
                refetch()
            }
            console.log(data)})
    }
    return (
        <div className='p-5'>
            <h2 className='text-3xl'>All Users</h2>
            <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
           {
            users.map((user, i)=><tr key={i}>
                <td>{i+1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                
                <td>{ user?.role !== "admin" &&  <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                <td><button className='btn btn-danger btn-xs'>Delete</button></td>
            </tr>)
           }
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default AllUsers;