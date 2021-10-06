import React, { useState } from "react";
import "./App.css";

class BrazillianCurrency extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line no-undef
    $("#productPrice").inputmask("decimal", {
      alias: "numeric",
      groupSeparator: ",",
      autoGroup: true,
      digits: 2,
      radixPoint: ".",
      digitsOptional: false,
      allowMinus: false,
      prefix: "R$ ",
      placeholder: "0",
    });
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-undef
    $("#productPrice").inputmask("remove");
  }

  render() {
    return <input type="text" id="productPrice"></input>
  }
}

function App() {
  const [mask, setMask] = useState(true);
  const toggle = () => setMask(!mask);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>React jQuery</h1>
        Brazillian currency input:&nbsp;
        { mask && <BrazillianCurrency></BrazillianCurrency> }
        { !mask && <input type="text" disabled /> }
        <button onClick={toggle}>Toggle</button>
      </div>
    </div>
  );
}

export default App;
