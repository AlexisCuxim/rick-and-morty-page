export interface CharactersApiProps {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginProps;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface OriginProps {
  name: string;
  url: string;
}

export interface LocationProps {
  name: string;
  url: string;
}
