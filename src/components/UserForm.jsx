import React, { useState } from "react";


function UserForm(props) {

  return (
    <div className="mb-3 me-lg-5">
      <h3>Search your profile</h3>
      <input className="p-2" placeholder="username" type="text" onChange={props.handleUser} />
      <button id="btn" className="ms-2 rounded btn bg-dark text-white " onClick={props.changeUser}>Change</button>
      
    </div>
  );
}

export default UserForm;
