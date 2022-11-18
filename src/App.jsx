import { useEffect, useState } from "react";
import Card from "./components/Card";
import github from "./services/github";
import "./assets/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DownloadBtn from "./components/DownloadBtn";
function App() {
  const [user, setUser] = useState();
  const [text, setText] = useState();
  useEffect(() => {
    github
      .get("/users/torvalds")
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  function changeUser() {
    github
      .get("/users/" + text)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }
  function handleUser(event) {
    if (!event.target.value) return;
    setText(event.target.value);
  }
  let card = document.getElementById("card");

  return (
    <div id="page-container">
      <Navbar></Navbar>
      <div id="content-wrap">
        <Card user={user} changeUser={changeUser} handleUser={handleUser}></Card>
        <DownloadBtn card={card}></DownloadBtn>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
