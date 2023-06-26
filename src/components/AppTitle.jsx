import styled from 'styled-components';

const AppTitle = ({
  title = 'Box Office',
  subtitle = 'Search for Movies, TV-Shows and Actors',
}) => {
  return (
    <TitleWrapper>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <h2>{subtitle}</h2>
      </div>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;
  h1 {
    color: ${({ theme }) => theme.mainColors.blue};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  p {
    color: ${({ theme }) => theme.mainColors.dark};
    margin: 0;
  }
`;

export default AppTitle;
