export type Character = {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: { name: string; url: string };
  name: string;
  origin: { name: string; url: string };
  species: string;
  status: string;
  type: string;
};

export type Info = {
  count: number;
  next?: string | null;
  prev?: string | null;
  pages: number;
};

export type ApiLoad = {
  results: Character[];
  info: Info;
};

export type CharacterState = {
  characters: ApiLoad;
};
