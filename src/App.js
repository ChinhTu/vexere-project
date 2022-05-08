import "./App.css";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { BackTop } from "antd";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header></Header>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
