import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import CustomerList from "./CustomerList";

function App() {

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/customers")
      .then((r) => r.json())
      .then(setCustomers);
  }, []);

  return (
    <Route exact path="/">
      <div>Homepage!</div>
      <CustomerList customers={customers} />
    </Route>
  );
}

export default App;
