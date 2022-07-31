// // import React from "react";
// import { useState } from "react";
// // import ReactDOM from "react-dom/client";

// const Recruitmentform = () => {
//   // function MyForm() {
//   const [name, setName] = useState({name: "" });
//   const [age, setAge] = useState({ age: "" });

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setName((values) => ({ ...values, [name]: value }));
//     setAge((values) => ({ ...values, [age]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert({name});
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert({age});

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Enter your name:
//         <input
//           type="text"
//           name="username"
//           value={inputs.username || ""}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Enter your age:
//         <input
//           type="number"
//           name="age"
//           value={inputs.age || ""}
//           onChange={handleChange}
//         />
//       </label>
//       <input type="submit" />
//     </form>
//   );
// };

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<MyForm />);

// export default Recruitmentform;
