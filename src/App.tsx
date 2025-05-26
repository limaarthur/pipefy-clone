import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Header } from './components/Header';
import { Board } from './components/Board';

import { GlobalStyles } from './styles/GlobalStyles';

export function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Board />
      <GlobalStyles />
    </DndProvider>
  )
}
