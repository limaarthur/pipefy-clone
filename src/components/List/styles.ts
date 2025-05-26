import styled from 'styled-components';

interface ContainerProps {
  done?: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 0 1rem;
  height: 100%;
  flex: 0 0 20rem; // União flex-grow: 0 (Habilidade de um componente esticar) flex-shrink: 0 (Possibilidade do elemento de encolher) e flex-basis: 320 (Determina o tamanho base desse elemento)
  opacity: ${props => props.done ? 0.6 : 1};

  & + div { // Aplica estilização (borda) da segunda lista para frente
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.6rem;

    h2 {
      font-weight: 500;
      font-size: 1rem;
      padding: 0 0.6rem;
    }
  }

  ul {
    margin-top: 1.8rem;
  }
`;
