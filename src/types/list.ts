export type Card = {
  id: number;
  content: string;
  labels: string[];
  user?: string;
};

export type ListData = {
  title: string;
  creatable: boolean;
  done?: boolean;
  cards: Card[];
};