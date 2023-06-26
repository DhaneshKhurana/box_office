const PCard = ({ data }) => {
  const imgsrc = data.image ? data.image.medium : '/altImage.png';
  const name = data.name;
  const gender = data.gender;
  const deathday = data.deathday || 'Still Alive';
  const birthday = data.birthday || 'Not known';
  const country = data.country ? data.country.name : 'Not Known';

  return (
    <div>
      <div>
        <img src={imgsrc} alt={`${name} image`}></img>
      </div>
      <div>
        <h1>Name: {name}</h1>
      </div>
      <div>
        <h3>Gender: {gender}</h3>
      </div>
      <p>
        Birthday: {birthday} Death: {deathday}
      </p>
      <p>Country: {country}</p>
    </div>
  );
};
export default PCard;
