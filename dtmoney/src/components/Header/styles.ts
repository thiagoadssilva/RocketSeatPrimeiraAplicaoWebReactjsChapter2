import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div` 
  max-width: 1120px; // Usando max e margin auto dentro do container posso deixa no meio
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button{
    font-size: 1rem;
    color: #FFF;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s; // Colocar uma transição de 2 segundo no passar do botão

    &:hover{
      filter: brightness(0.9); // Dar uma escurecida no botão ao passar por cima
    }
  }
`;