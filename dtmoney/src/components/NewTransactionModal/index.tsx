import Modal from 'react-modal';
import { Container } from './styles';
import closeSvg from '../../assets/close.svg';

interface NewTransactionProps{
  isOpen: boolean,
  onRequestClose: () => void
}

Modal.setAppElement('#root');// Por questão de acessibilidade temos que colocar essa linha, pois assim estamos informando para o modal o elemento raiz..

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionProps){
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
      <Container>
        <h2>Cadastrar Transação</h2>  

        <input placeholder="Titulo" />
        <input placeholder="Valor" type="number"/>
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>  
    </Modal>
  );
}