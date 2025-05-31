import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #FFFFFF;
  border-radius: 5px;
  margin-bottom: 0.6rem;
  padding: 1rem;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 1.2rem solid rgba(230, 236, 245, 0.4);
  cursor: grab; // Gera a mãozinha no card

  header {
    position: absolute;
    top: -1.4rem;
    left: 1rem;
  }

  p {
    font-weight: 500;
    line-height: 1.2rem;
  }

  img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 2px;
    margin-top: 0.3rem;
  }

  ${props => props.isDragging && css` // Irá gerar a borda tracejada ao arrastar
    border: 2px dashed rgba(0, 0, 0, 0.2);
    padding-top: 2rem; // observar
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    cursor: grabbing;

    p, img, header {
      opacity: 0;
    }
  `}
`;

export const Label = styled.span`
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 2px;

  display: inline-block;

  background: ${props => props.color}; // Recupera a propriedade color através da função e aplica como background da label
`;
