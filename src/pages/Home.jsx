import { useState } from 'react';
import { getActors, getShows } from '../data/tv_maze';
import ShowGrid from '../show/ShowGrid';
import ActorGrid from '../actor/ActorGrid';
import { useQuery } from '@tanstack/react-query';
//import { useEffect } from 'react';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [searchOption, setSearchOption] = useState('show');
  //const [result, setResult] = useState(null);
  const queryKey = [searchStr, searchOption];
  const queryFn =
    searchOption === 'show'
      ? () => getShows(searchStr)
      : () => getActors(searchStr);
  const { data: result, error } = useQuery({
    queryKey: queryKey,
    queryFn: queryFn,
  });

  console.log('Some error occured?', error);

  const onSearchStrChange = event => {
    setSearchStr(event.target.value);
    //updateResult(event.target.value, null);
  };

  const onSearchOptionChanged = event => {
    setSearchOption(event.target.value);
    //updateResult(null, event.target.value);
  };

  // async function updateResult(searchVal, searchOp) {
  //   let data = null;
  //   searchVal ||= searchStr;
  //   searchOp ||= searchOption;
  //   if (searchOp === 'show') {
  //     data = await getShows(searchVal);
  //   } else {
  //     data = await getActors(searchVal);
  //   }
  //   setResult(data);
  // }

  const renderResults = () => {
    if (searchOption === 'show') {
      return <ShowGrid result={result} />;
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
