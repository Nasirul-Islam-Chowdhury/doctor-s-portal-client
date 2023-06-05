import { useEffect, useState } from "react";

const useToken = (email)=>{
    const [token , settoken] = useState("");
    useEffect(()=>{
       if(email){
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
          if(data.accessToken){
            localStorage.setItem("accessToken", data.accessToken)
            settoken(data.accessToken)
          }
          console.log(data)})
       }
      },[email])
      return [token]
}
export default useToken;