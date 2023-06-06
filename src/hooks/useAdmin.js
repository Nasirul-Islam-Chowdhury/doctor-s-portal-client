import { useEffect, useState } from "react"

const useAdmin  =(email)=>{
    const [ admin, setAdmin] = useState(false);
    const [isAdminloading, setisAdminLoding] = useState(true)
    useEffect(()=>{
        if(email){
            fetch(`https://doctor-s-portal-server-jlvo7vylc-nicchy123.vercel.app/users/admin/${email}`)
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