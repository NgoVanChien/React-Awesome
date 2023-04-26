import { useState } from "react";
import "./App.css";
import Clock from "./Clock";
import BareInput from "./BareInput";
import CorrectlyState from "./CorrectlyState";
import BareButton from "./BareButton";
import Layout from "./Layout";
import LoginControl from "./LoginControl";
import Productlist from "./ProductList/Productlist";
import Form from "./Form/Form";
import Calculator from "./Calculator/Calculator";
import Inheritance from "./Composition_Inheritance/Inheritance";
import Composition from "./Composition_Inheritance/Composition";
import FilterableProductTable from "./ThinkingInReact/FilterableProductTable";
function App() {
  // const [name, setName] = useState("Casio");
  // const [visiable, setVisible] = useState(true);

  return (
    <div className="App">
      {/* <button onClick={() => setName("Apple")}>Change Name</button>
      <button onClick={() => setVisible(false)}>Hide Clock Component</button>
      {visiable && <Clock name={name} />} */}
      {/* <Layout> */}
      {/* layout children */}
      {/* <h1>Hello</h1>
        <BareInputf
          type="password"
          value="100"
          autoFocus
          className="input-control"
          onChange={() => {}}
        />
        <BareButton />
      </Layout> */}
      {/* <LoginControl hidden={false} /> */}
      {/* <CorrectlyState /> */}
      {/* <Productlist /> */}
      {/* <Form /> */}
      {/* <Calculator /> */}
      {/* <Inheritance /> */}
      {/* <Composition /> */}
      <FilterableProductTable />
    </div>
  );
}

export default App;
