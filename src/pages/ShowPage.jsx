import ShowMainData from '../components/show/ShowMainData';
import Details from '../components/show/Details';
import Seasons from '../components/show/Seasons';
import Cast from '../components/show/Cast';
import { getShowDetail } from '../data/tv_maze';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

//Always remember usequery may take time, check is loading and handle undefined value till then
//I wasted 3 hours to figure out this. Finally error solved. Before I could get result, the app crahsed
//because undefined show data was not handled!!!
const ShowPage = () => {
  const { showId } = useParams();

  const {
    data: show,
    error,
    isLoading,
  } = useQuery({
    queryKey: [showId],
    queryFn: () => getShowDetail(`/${showId}`),
  });

  console.log('ShowPage: showId recvd :: ', showId);
  console.log('Show data recieved ', show);
  if (isLoading) {
    console.log('Wait I am still loading');
  }

  if (error || !show) {
    return (
      <>
        <div>Show page with show id {showId}</div>
        <div>Sorry an unforseen error occured. Here it is.</div>
        <div>Error Name : {error ? error.name : 'No Error'}</div>
        <div>Error Message : {error ? error.message : 'No error'}</div>
        <div>Error : {error ? error.toString() : 'No Error'}</div>
      </>
    );
  } else {
    return (
      <div>
        <ShowMainData
          image={show.image}
          name={show.name}
          rating={show.rating}
          summary={show.summary}
          tags={show.genres}
        />

        <div>
          <h2>Details</h2>
          <Details
            status={show.status}
            network={show.network}
            premiered={show.premiered}
          />
        </div>

        <div>
          <h2>Seasons</h2>
          <Seasons seasons={show._embedded.seasons} />
        </div>

        <div>
          <h2>Cast</h2>
          <Cast cast={show._embedded.cast} />
        </div>
      </div>
    );
  }
};

export default ShowPage;
