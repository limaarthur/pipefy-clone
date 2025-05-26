import type { ListData } from '../../types/list';
import { Button } from '../Button';
import { Card } from '../Card';

import { Container } from './styles';

type ListProps = {
  data: ListData;
};

export function List({ data }: ListProps) {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && ( // Caso seja true irá redenrizar o button
          <Button />
        )}
      </header>
      <ul>
        {data.cards.map(card => <Card key={card.id} data={card} />)}
      </ul>
    </Container>
  );
}