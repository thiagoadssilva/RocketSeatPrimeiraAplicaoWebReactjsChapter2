import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from 'react';
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false); // Variavel de estado que vai controlar quando o modal vai está aberto ou fechado.

  function handleOpenNewTransactionModal(){// Função que vai mudar o estado da variavel do modal para true e assim possibilitando abertura do modal.
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){// Função que vai mudar o estado da variavel do modal para false e assim possibilitando o fechamento do modal.
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />  
      < NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>    
      <GlobalStyle />
    </TransactionsProvider>
  );
}