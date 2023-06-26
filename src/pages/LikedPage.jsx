import { useQuery } from '@tanstack/react-query';
import { getFavShows } from '../data/tv_maze';
import ShowGrid from '../components/show/ShowGrid';
import { useState } from 'react';

function LikedPage() {
  // const [favShows] = useStorageHook({
  //   initVal: [],
  //   storeKey: 'favShows',
  // });
  const [favShows, setFavShows] = useState(() => {
    const storedVal = localStorage.getItem('favShows');
    return storedVal ? JSON.parse(storedVal) : [];
  });

  const onfavChanged = favs => {
    console.log('LikedPage:: fav-shows changed', favShows);
    setFavShows(favs);
  };

  const { data: result, error } = useQuery({
    queryKey: [favShows],
    queryFn: () => getFavShows(favShows),
  });
  if (error) {
    return <div>Some Error Occurred : {error.toString()}</div>;
  } else {
    return <ShowGrid result={result} favChanged={onfavChanged} />;
  }
}

export default LikedPage;
