import { useState } from 'react';
import './App.css'
import Table from "./component/Table"

const NETINCOME = [
  {brand: "McDonalds", income: 1291283}, 
  {brand: "Burger King", income: 1927361}, 
  {brand: "KFC", income: 1098463}];

function App() {

  return (
    <>
      <Table netIncome={NETINCOME} />
    </>
  )
}

export default App
