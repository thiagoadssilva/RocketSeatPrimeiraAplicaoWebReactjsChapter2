import {createContext, useEffect, useState, ReactNode} from 'react';
import { api } from './services/api';


interface Transaction{
  id: number,
  title: string,
  amount: number,
  category: string,
  type: string,
  createdAt: string
}

interface TransactionsProviderProps{
  children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({children} : TransactionsProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() =>{// Fazendo a comunicação com api fake
    api.get('transactions')
      .then(Response => setTransactions(Response.data.transactions))
      //.then(Response => console.log(Response.data.transactions))
  },[]);

  return(
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}