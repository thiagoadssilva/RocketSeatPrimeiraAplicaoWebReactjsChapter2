import {createContext, useEffect, useState, ReactNode, useContext} from 'react';
import { api } from '../services/api';


interface Transaction{
  id: number,
  title: string,
  amount: number,
  category: string,
  type: string,
  createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;
/*interface TransactionInput{
  title: string,
  amount: number,
  category: string,
  type: string
}*/

interface TransactionsProviderProps{
  children: ReactNode;
}

interface TransactionsContextData{
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({children} : TransactionsProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() =>{// Fazendo a comunicação com api fake
    api.get('transactions')
      .then(Response => setTransactions(Response.data.transactions))
      //.then(Response => console.log(Response.data.transactions))
  },[]);

  async function  createTransaction(transactionInput: TransactionInput){
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });
    const {transaction} = response.data;
    setTransactions([...transactions, transaction]); 
  }

  return(
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions(){
  const context = useContext(TransactionsContext);
  return context;
}