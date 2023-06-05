import { useEffect, useState } from "react"

const useAdmin  =(email)=>{
    const [ admin, setAdmin] = useState(false);
    const [isAdminloading, setisAdminLoding] = useState(true)
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/users/admin/${email}`)
            .then(res=>res.json())
            .then(data=>{
                setisAdminLoding(false)
                setAdmin(data.isAdmin)
                })
        }
    },[email])
return [admin,isAdminloading]
}
export default useAdmin;