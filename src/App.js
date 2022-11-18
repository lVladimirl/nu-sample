import "./App.css";
import { useState } from "react";
import Header from "./components/header";
import MainContainer from "./components/mainContainer";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { amount: 2500, selectType: "entrada",TransasctionDescription: "Salário recebido"},
    { amount: -150, TransasctionDescription: "Conta de luz", selectType: "saída" }
  ])  
  return (
    <div className="App">
      <Header />
      <MainContainer setList={setListTransactions} list={listTransactions} />
    </div>
  );
}

export default App;
