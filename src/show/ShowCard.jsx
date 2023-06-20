import { Link } from 'react-router-dom';

const ShowCard = ({ data }) => {
  const imgsrc = data.image ? data.image.medium : '/altImage.png';
  const name = data.name;
  const type = data.type;
  const showId = data.id;
  const smry = data.summary
    ? data.summary
        .split(' ')
        .slice(0, 15)
        .join(' ')
        .replaceAll(/<[^>]+>/g, '')
    : 'No Summary Found';
  return (
    <>
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
      <div>
        <Link to={`/show/${showId}`}>Read More</Link>
      </div>
    </>
  );
};
export default ShowCard;
