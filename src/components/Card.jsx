import React from "react";
import UserForm from "./UserForm";

function Card(props) {
  return (
    <div  className="container text-center p-5 justify-content-center d-flex flex-wrap ">
      <UserForm
        changeUser={props.changeUser}
        handleUser={props.handleUser}
      ></UserForm>
      <div id="card" className="card p-3 d-flex text-start justify-content-center">
        <img id="img" src={props.user?.avatar_url} className="card-img-top" />
        <h1 className="text-center card-title mt-3">
          {props.user?.name}
        </h1>
        <h3 className="text-muted text-center">{props.user?.login}</h3>
        <div className="card-text mt-2">
          <p>Seguidores: &#10084; {props.user?.followers}</p>
          <p>Repositórios: &#9776; {props.user?.public_repos}</p>
        </div>
        
      </div>
    </div>
  );
}

export default Card;
