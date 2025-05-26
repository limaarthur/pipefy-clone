import { loadLists } from '../../data/api';
import { List } from '../List';

import { Container } from './styles';

const lists = loadLists();

export function Board() {
  return (
    <Container>
      {lists.map(list => <List key={list.title} data={list} />)}
    </Container>
  );
}