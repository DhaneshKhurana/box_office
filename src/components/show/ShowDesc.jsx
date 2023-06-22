import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowDetail } from '../../data/tv_maze';

const useShowId = showId => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getShowDetail(`/${showId}`);
        setData(data);
        console.log('data recieved inside useeffect', data);
      } catch (error) {
        console.log('Error in geeting show deatil ', error);
        setError(error);
      }
    }
    fetchData();
  }, [showId]);
  return { data, error };
};

const ShowDesc = () => {
  const { showId } = useParams();
  const { data, error } = useShowId(showId);

  // const [data, setData] = useState({});
  // const [error, setError] = useState(null);

  const imgsrc = data.image ? data.image.original : '/altImage.png';
  const name = data.name;
  const type = data.type;
  const smry = data.summary
    ? data.summary.replaceAll(/<[^>]+>/g, '')
    : 'No Summary Found';

  if (error) {
    return (
      <>
        <div>SHow page with show id {showId}</div>
        <div>Sorry an unforseen error occured. Here it is.</div>
        <div>Error Name : {error.name}</div>
        <div>Error Message : {error.message}</div>
        <div>Error : {error.toString()}</div>
      </>
    );
  } else {
    return (
      <>
        <div>SHow page with show id {showId}</div>
        <div>
          <img src={imgsrc} alt={`${name} image`}></img>
        </div>
        <div>
          <h1>Show Name: {name}</h1>
        </div>
        <div>
          <h3>Show Type: {type}</h3>
        </div>
        <p>Summary: {smry}</p>
      </>
    );
  }
};

export default ShowDesc;
