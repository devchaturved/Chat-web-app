import {Link} from 'react-router-dom'
import GenderCheckbox from './GenderCheckbox'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup'
const Signup = () => {
  const [inputs,setInputs] = useState({
    fullName: "",
    username: "",
    password:"",
    confirmPassword:"",
    gender: "",
  })

  const {loding,signup} = useSignup()
  const handleCheckboxChanges = (gender) =>{
    setInputs({...inputs,gender});
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    await signup(inputs)
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96  mx-auto">
      <div className="w-full p-6  rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl front-semibold text-center text-gray-300">
        Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-red-100">
                Full Name 
              </span>
            </label>
            <input type="text" placeholder="Animesh chaturvedi" className="w-full input input-bordered h-10" 
            value={inputs.fullName}
            onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-red-100">User Name</span>
            </label>
            <input type="text" placeholder="Ani" className="w-full input input-bordered h-10" 
            value={inputs.username}
            onChange={(e) => setInputs({...inputs, username: e.target.value})}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-red-100">Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" 
            value={inputs.password}
            onChange={(e) => setInputs({...inputs, password: e.target.value})}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-red-100">Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10"
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}            
            />
          </div>

          <GenderCheckbox onCheckboxChange = {handleCheckboxChanges} selectedGender={inputs.gender} />

          <Link to={"/login"} className="text-sm hover:underline hover:text-blue-500 inline-block text-green-400">
            Already have an account?
          </Link>

          <div className="flex items-center">
            <button className="btn btn-sm mt-2 text-white font-bold py-2 px-4 rounded mx-auto"
            disabled = {loding}>
            {loding ? <span className="loading loading-spinner"></span> : "Sign Up" }
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;




// import GenderCheckbox from './GenderCheckbox'
// const Signup = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96  mx-auto">
//       <div className="w-full p-6  rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl front-semibold text-center text-gray-300">
//         Sign Up <span className="text-blue-500"> ChatApp</span>
//         </h1>

//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-red-100">
//                 Full Name 
//               </span>
//             </label>
//             <input type="text" placeholder="Animesh chaturvedi" className="w-full input input-bordered h-10" />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-red-100">User Name</span>
//             </label>
//             <input type="text" placeholder="Ani" className="w-full input input-bordered h-10" />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-red-100">Password</span>
//             </label>
//             <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-red-100">Confirm Password</span>
//             </label>
//             <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10" />
//           </div>

//           <GenderCheckbox/>

//           <a href="#" className="text-sm hover:underline hover:text-blue-500 inline-block text-green-400">
//             Already have an account?
//           </a>

//           <div className="flex items-center">
//             <button className="btn btn-sm mt-2 text-white font-bold py-2 px-4 rounded mx-auto">Sign Up</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Signup;
