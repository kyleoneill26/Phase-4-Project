import React from "react";
import { useState } from "react";

function Customer({customer}) {

  return (
      <div>{customer.fname}</div>
    );
}

export default Customer;

