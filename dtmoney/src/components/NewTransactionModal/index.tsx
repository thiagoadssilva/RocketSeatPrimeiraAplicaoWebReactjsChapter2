import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeSvg from '../../assets/close.svg';

import incomeSvg from '../../assets/income.svg';
import outcomeSvg from '../../assets/outcome.svg';
import { FormEvent, useState, useContext } from 'react';
import { useTransactions } from '../../hooks/useTransactions';



interface NewTransactionProps{
  isOpen: boolean,
  onRequestClose: () => void
}

Modal.setAppElement('#root');// Por questão de acessibilidade temos que colocar essa linha, pois assim estamos informando para o modal o elemento raiz..

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionProps){
  const {createTransaction} = useTransactions();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();

    await createTransaction({
      title,
      category,
      amount,
      type
    });
 
    setTitle('');
    setCategory('');
    setAmount(0);
    setType('deposit');
    onRequestClose();
   
  }

  return(
    <Modal
      isOpen={isOpen}// Função que vai determinar abertura e fechamento do modal.
      onRequestClose={onRequestClose}// função que quando clicar no esc ou na parte escura fecha o modal.
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeSvg} alt="Fechar Modal"/>
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>  

        <input 
          placeholder="Titulo"  
          value={title} 
          onChange={event => setTitle(event.target.value)}
        />
        <input 
          placeholder="Valor" 
          type="number" 
          value={amount} 
          onChange={event => setAmount(Number(event.target.value))}
        />
        <TransactionTypeContainer>
          <RadioBox 
            type="button" 
            onClick={() => {setType('deposit');}}
            isActive={type == 'deposit'}
            activeColor="green"
          >
            <img src={incomeSvg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox 
            type="button" 
            onClick={() => {setType('withdraw');}}
            isActive={type == 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeSvg} alt="Saida" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input 
          placeholder="Categoria" 
          value={category} 
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>  
    </Modal>
  );
}