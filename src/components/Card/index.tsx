import { Container, Label } from './styles';

export function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>Fazer a migração completa de servidor</p>
      <img src="https://avatars.githubusercontent.com/u/66640568?v=4" alt="Avatar" />
    </Container>
  );
}