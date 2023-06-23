import { useState } from 'react';
import { getActors, getShows } from '../data/tv_maze';
import ActorGrid from '../components/actor/ActorGrid';
import { useQuery } from '@tanstack/react-query';
import ShowGridPage from './ShowGridPage';

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
    <>
      <div>
        <input type="text" value={searchStr} onChange={onSearchStrChange} />
        <label>
          Show
          <input
            type="radio"
            name="search_option"
            value="show"
            checked={searchOption === 'show'}
            onChange={onSearchOptionChanged}
          />
        </label>
        <label>
          Actor
          <input
            type="radio"
            name="search_option"
            value="actor"
            checked={searchOption === 'actor'}
            onChange={onSearchOptionChanged}
          />
        </label>
      </div>
      <div>{result && renderResults()}</div>
    </>
  );
};

export default Home;
