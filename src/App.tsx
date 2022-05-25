import Dashboard from "./components/Dashbord";
import  Header  from "./components/Header";

import {GlobalStyle}  from "./styles/global";
import { useState } from "react";
import ReactModal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./Hooks/useTransactions";

if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#root');
//Modal.setAppElement('root')

function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal () {
    setIsNewTransactionModalOpen(false);
}
  return (
    <TransactionsProvider>
      <Header onOpenNewTransaction={handleOpenNewTransactionModal}/>
      <Dashboard/>

     <NewTransactionModal
     isOpen={isNewTransactionModalOpen}
     onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle/>
    </TransactionsProvider>
  );
}

export default App;
