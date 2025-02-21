import React from 'react';
import GenderCheckbox from './GenderCheckbox';

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400/0 bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-indigo-500"> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input type="text" placeholder="John Doe" className="w-full input input-primary h-10" />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="johndoe" className="w-full input input-primary h-10" />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-primary h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-primary h-10"
            />
          </div>

          <GenderCheckbox />

          <a
            href="#"
            className="text-sm label hover:underline hover:text-indigo-500 mt-5 inline-block">
            Already have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-3 text-gray-400">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;



// STARTER CODE FOR THIS FILE:
// import React from 'react';
// import GenderCheckbox from './GenderCheckbox';

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400/0 bg-clip-padding backdrop-filter backdrop-blur-lg">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Sign Up <span className="text-indigo-500"> ChatApp</span>
//         </h1>

//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input type="text" placeholder="John Doe" className="w-full input input-primary h-10" />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input type="text" placeholder="johndoe" className="w-full input input-primary h-10" />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full input input-primary h-10"
//             />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="w-full input input-primary h-10"
//             />
//           </div>

//           <GenderCheckbox />

//           <a
//             href="#"
//             className="text-sm label hover:underline hover:text-indigo-500 mt-5 inline-block">
//             Already have an account?
//           </a>

//           <div>
//             <button className="btn btn-block btn-sm mt-3 text-gray-400">Sign Up</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
