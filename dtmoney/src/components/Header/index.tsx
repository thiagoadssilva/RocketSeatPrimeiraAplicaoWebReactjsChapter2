import logoImg from '../../assets/logo.svg';

import { 
  Container,
  Content 
} from './styles';

interface HeaderPorps{// como estamos trabalhando com typescript é obrigatório tipar tudo.
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}:HeaderPorps){// Aqui estamos recebendo algumas propriedades
  

  return(
    <Container>
      <Content>
       <img src={logoImg} alt="Dt money" />
       <button type="button" onClick={onOpenNewTransactionModal}>Nova Transação</button>
      </Content>
    </Container>
  );
}