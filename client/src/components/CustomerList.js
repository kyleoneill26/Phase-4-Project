import React, { useState, useEffect } from 'react';
import Customer from './Customer';

function CustomerList({customers}) {

    const customerArray = customers.map( customerObj => {
      return <Customer key={customerObj.id} customer={customerObj} />  
    } )
  
  return (
      <div>{customerArray}</div>
    );
}

export default CustomerList;
