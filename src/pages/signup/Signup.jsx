import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";
import useToken from "../../hooks/useToken";
const Signup = () => {
    const [signupError, setSignupError] = useState("");
    const {handleGooglesignin} = useContext(AuthContext);
    const navigate = useNavigate();
    const [createdUserEmail, setcreatedUserEmail] = useState("")
    const [token] = useToken(createdUserEmail);
    if(token){
       navigate("/")
    }
    const googleSignin = ()=>{
      handleGooglesignin()
      .then(res=>{
        toast("User Logged in Succesfully")
        console.log(res)})
      .catch(err=>console.log(err))
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const {createUser, handleUpdateProfile} = useContext(AuthContext)
      const saveuser = (email, name)=>{
        const users = {email, name}
        fetch('https://doctor-s-portal-server-jlvo7vylc-nicchy123.vercel.app/users',{
          method: "POST",
          headers: {
            "content-type":"application/json"
          },
          body: JSON.stringify(users)
        })
        .then(res=>res.json())
        .then(data=>{
          setcreatedUserEmail(email)
          })
      }


      const handleSignup = (data) => {
        setSignupError(" ")
        createUser(data.email, data.password)
        .then(result=>{
            console.log(result.user)
           const userInfo = {
            displayName: data.name
           }
           handleUpdateProfile(userInfo)
           .then(()=>{
            saveuser(data.email, data.name)
          
            toast("User Created Succesfully")
           })
           .catch(err=>console.log(err))
        })
        .catch(error=>{
            setSignupError(error.message)
            console.log(error)})
      };
 
    return (
        <div className="h-[800px] flex justify-center items-center">
          <div className="w-96 p-5">
            <h2 className="text-4xl text-center mb-10">Signup</h2>
    
          <div className="text-black">
            <form onSubmit={handleSubmit(handleSignup)}>
        
              <div className="form-control w-full mb-2 ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                defaultValue="" {...register("name" ,{ required: 'name is required' })}
                aria-invalid={errors.name ? "true" : "false"} 
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
               
              </div>
              {errors.name && <p className="text-red-600" role="alert">{errors.name?.message}</p>}

              <div className="form-control w-full mb-2">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                
                defaultValue="" {...register("email" ,{ required: 'Email is required' })}
                aria-invalid={errors.email ? "true" : "false"} 
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
               
              </div>
              {errors.email && <p className="text-red-600" role="alert">{errors.email?.message}</p>}
    
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                 className="input input-bordered w-full "
                defaultValue="" {...register("password" ,
                { required: "Password is required",
                minLength:{value: 6, message: "Password must be 6 characters or more"},
                pattern: {value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/, message:"Password must be includes numbers, uppercase, lowercase and special characters"}
            
            } )}
                  type="password"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
                 {errors.password && <p className="text-red-600 text-sm mt-1" role="alert">
                    {errors.password?.message}</p>}
                   <label className="label">
                  <span className="label-text">Forget Password?</span>
                </label>
              </div>
    <div>
        <p className="text-red-600 my-2">{signupError}</p>
    </div>
              <input className="btn btn-neutral w-full" type="submit" value={"Sign up"} />
            </form>
            <p  className="text-center text-black mt-3">New to Doctor's portal? <Link to="/login">Login</Link></p>
          </div>
          <div className="divider">OR</div>
          <div>
            <button onClick={googleSignin} className="btn btn-secondary w-full">
              Continue with google
            </button>
          </div>
          </div>
        </div>
      );
};

export default Signup;