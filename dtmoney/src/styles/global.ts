import { createGlobalStyle } from 'styled-components'; // Fazendo a importação da função para criação das globais

export const GlobalStyle = createGlobalStyle`
  :root{ // Criando as variáveis globais das cores.
    --background: #F0F2F5;
    --red: #E52E4D;
    --green: #33CC95;
    --blue: #5429CC;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --shape: #FFFFFF;
  }  

  *{ // Aqui estamos pegando todos os elementos da DOM
    margin: 0;
    padding: 0;
    box-sizing: border-box; //Largura e altura se aplicam a todas as partes do elemento: conteúdo, preenchimento e bordas
  }

  // INICIO - Da configuração da fonte de toda aplicação conforme os dispositivos
  // Para qualquer dúvida Voltar na aula 'Criando estilos globais no tempo 05:00 até 09:00'
  html{
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  // FIM - Da configuração da fonte de toda aplicação conforme os dispositivos

  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased; // Deixa as fontes mais detalhadas.
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

// INICIO - Estilização do MODAL  
  .react-modal-overlay{
    background: rgba( 0, 0, 0, 0.5);

    position: fixed; // Para ficar em toda tela
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
  }

  .react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.8);
    }
  }

// FIM - Estilização do MODAL  
`;
 