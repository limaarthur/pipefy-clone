import { Button } from '../Button';
import { Card } from '../Card';

import { Container } from './styles';

export function List() {
  return (
    <Container>
      <header>
        <h2>Tarefas</h2>
        <Button />
      </header>
      <ul>
        <Card />
        <Card />
        <Card />
      </ul>
    </Container>
  );
}