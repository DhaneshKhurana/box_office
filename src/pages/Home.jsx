import { useState } from 'react';
import { getActors, getShows } from '../data/tv_maze';
import ActorGrid from '../components/actor/ActorGrid';
import { useQuery } from '@tanstack/react-query';
import ShowGridPage from './ShowGridPage';
import CustomRadio from '../components/home/CustomRadio';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [searchOption, setSearchOption] = useState('show');
  const queryKey = [searchStr, searchOption];
  const queryFn =
    searchOption === 'show'
      ? () => getShows(searchStr)
      : () => getActors(searchStr);
  const { data: result, error } = useQuery({
    queryKey: queryKey,
    queryFn: queryFn,
  });

  console.log('Some error occurred?', error);

  const onSearchStrChange = event => {
    setSearchStr(event.target.value);
    //updateResult(event.target.value, null);
  };

  const onSearchOptionChanged = event => {
    setSearchOption(event.target.value);
    //updateResult(null, event.target.value);
  };

  const renderResults = () => {
    if (searchOption === 'show') {
      return <ShowGridPage result={result} />;
    }
    return <ActorGrid result={result} />;
  };

  return (
    <div>
      <div>
        <input type="text" value={searchStr} onChange={onSearchStrChange} />
        <CustomRadio
          label="Show"
          name="search_option"
          value="show"
          checked={searchOption === 'show'}
          onChange={onSearchOptionChanged}
        />
        <CustomRadio
          label="Actor"
          name="search_option"
          value="actor"
          checked={searchOption === 'actor'}
          onChange={onSearchOptionChanged}
        />
      </div>
      <div>{result && renderResults()}</div>
    </div>
  );
};

export default Home;
