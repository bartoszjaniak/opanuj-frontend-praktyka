import { useEffect, useState } from 'react';
import CharacterList from '../components/CharacterList';
import SearchForm from '../components/SearchForm';
import SearchTitle from '../components/SearchTitle';
import { fetchData } from '../providers/data-access';
import { Character } from '../types/Character';

function CharacterSearchContainer() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [characters, setCharacters] = useState<Character[]>([]);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    if (name || gender) {
        fetchData(name, gender).then((data) => setCharacters(data));
    }
  }, [name, gender]);

  const sortedCharacters = [...characters].sort((a, b) => {
    if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'created') {
      return new Date(a.created).getTime() - new Date(b.created).getTime();
    }
    return 0;
  });

  return (
    <>
      <div className="pt-20" />
      <SearchTitle />
      <div className="pt-8" />
      <SearchForm
        name={name}
        setName={setName}
        gender={gender}
        setGender={setGender}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="pt-12" />
      <CharacterList characters={sortedCharacters} />
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
