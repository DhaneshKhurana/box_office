const AppTitle = ({
  title = 'Box Office',
  subtitle = 'search for movies and actors',
}) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <h2>{subtitle}</h2>
      </div>
    </div>
  );
};

export default AppTitle;
