import { use } from 'react';
import Image from 'next/image';
import { CharactersApiProps } from '@/interfaces/CharactersApi';
import { getAllCharacters } from '@/services/charactes';

export function CharacterList() {
  const characterList = use(getAllCharacters()); 

  return (
    <ul>
      {characterList.results.map((character: CharactersApiProps, key: number) => (
        <li key={key}>
          <Image
            width={100}
            height={100}
            src={character.image}
            alt={character.name}
            priority
          />
          <h2>{character.name}</h2>
        </li>
      ))}
    </ul>
  )
}
