import styled from "styled-components";

export const Container = styled.form`
  h2{
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder{
      color: var(--text-body);
    }

    & + input{// Aqui estamos pegando todo input apartir do segundo e colocando um espaço acima, poderia ser qualquer tag
      margin-top: 1rem;
    }
  }

  button[type="submit"]{// Dessa maneira estamos pegando apenas o botão do tipo submit
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #FFF;
    border-radius: 0.25rem;
    border: 0;// Pois o botão já vem com borda
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
  }
`;