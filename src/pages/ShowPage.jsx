import ShowMainData from '../components/show/ShowMainData';
import Details from '../components/show/Details';
import Seasons from '../components/show/Seasons';
import Cast from '../components/show/Cast';
import { getShowDetail } from '../data/tv_maze';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Always remember useQuery may take time, check is loading and handle undefined value till then
//I wasted 3 hours to figure out this. Finally error solved. Before I could get result, the app crashed
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

  console.log('ShowPage: showId rcvd :: ', showId);
  console.log('Show data received ', show);
  if (isLoading) {
    console.log('Wait I am still loading');
  }

  if (error || !show) {
    return (
      <div>
        <div>Show page with show id {showId}</div>
        <div>Sorry an unforeseen error occurred. Here it is.</div>
        <div>Error Name : {error ? error.name : 'No Error'}</div>
        <div>Error Message : {error ? error.message : 'No error'}</div>
        <div>Error : {error ? error.toString() : 'No Error'}</div>
      </div>
    );
  } else {
    return (
      <ShowPageWrapper>
        <BackHomeWrapper>
          <Link to="/">Go back to home</Link>
        </BackHomeWrapper>
        <div>
          <ShowMainData
            image={show.image}
            name={show.name}
            rating={show.rating}
            summary={show.summary}
            tags={show.genres}
          />

          <InfoBlock>
            <h2>Details</h2>
            <Details
              status={show.status}
              network={show.network}
              premiered={show.premiered}
            />
          </InfoBlock>

          <InfoBlock>
            <h2>Seasons</h2>
            <Seasons seasons={show._embedded.seasons} />
          </InfoBlock>

          <InfoBlock>
            <h2>Cast</h2>
            <Cast cast={show._embedded.cast} />
          </InfoBlock>
        </div>
      </ShowPageWrapper>
    );
  }
};

export default ShowPage;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
