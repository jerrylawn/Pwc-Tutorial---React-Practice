import React from "react";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  //     const navigate = useNavigate() ;
  //     const handleSubmit = (e) =>{
  //         e.preventDefault()

  //         if ( email && password){
  //             navigate('')
  //         }
  // //     }

  return (
    <div>
      <section className="container">
        <form id="my-form">
          <h1>Add User</h1>
          <div className="msg"></div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="number" id="password" />
          </div>
          <input className="btn" type="submit" value="Submit" />
        </form>
      </section>
    </div>
  );
};

export default Loginpage;
