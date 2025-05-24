import { MdAdd } from 'react-icons/md';

import { Container } from './styles';

export function Button() {
  return (
    <Container>
      <button type="button">
        <MdAdd size={20} color="#FFFFFF"/>
      </button>
    </Container>
  );
}