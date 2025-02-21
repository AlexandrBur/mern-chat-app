import React from 'react';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400/0 bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-indigo-500"> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-primary h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter password"
              className="w-full input input-primary h-10"
            />
          </div>
          <a
            href="#"
            className="text-sm label hover:underline hover:text-indigo-500 mt-3 inline-block">
            {"Don't"} have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-3 text-gray-400">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;



// STARTER CODE FOR THIS FILE:
// import React from 'react';

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400/0 bg-clip-padding backdrop-filter backdrop-blur-lg">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login
//           <span className="text-indigo-500"> ChatApp</span>
//         </h1>

//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="w-full input input-primary h-10"
//             />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter password"
//               className="w-full input input-primary h-10"
//             />
//           </div>
//           <a
//             href="#"
//             className="text-sm label hover:underline hover:text-indigo-500 mt-3 inline-block">
//             {"Don't"} have an account?
//           </a>

//           <div>
//             <button className="btn btn-block btn-sm mt-3 text-gray-400">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
