import "./App.css";
// import UserClassComponent from "./User.class";
// import User from "./User";
import { useState } from "react";
// import RuleOfHook from "./ruleOfhook";
// import AutoBatching from "./AuroBatching";
import Cart from "./Header/Cart";

import Navigator from "./Header/Navigator";

function App() {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className="App">
      {/* <UserClassComponent /> */}
      {/* {isShow && <User />}
      <button onClick={() => setIsShow((prevState) => !prevState)}>
        Change isShow
      </button> */}
      {/* <RuleOfHook /> */}
      {/* <AutoBatching />/ */}
      <Cart />
      <Navigator />
    </div>
  );
}

export default App;
