import { Container, Label } from './styles';
import { useDrag } from 'react-dnd';

interface CardProps {
  data: {
    id: number;
    content: string;
    labels: string[];
    user?: string;
  };
}

export function Card({ data }: CardProps) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'CARD',
    item: {},
    collect: monitor => ({ // Coleta informações sobre o drag, item arrastado ou não
      isDragging: monitor.isDragging(),
    }), 
  }));

  return (
    <Container ref={dragRef} isDragging={isDragging}>
      <header>
        {data.labels.map(label => <Label key={label} color={label} />)}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="Avatar" />}
    </Container>
  );
}