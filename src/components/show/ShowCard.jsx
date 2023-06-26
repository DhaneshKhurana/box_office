import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SearchCard, SearchImgWrapper } from '../sharedStyles/SearchCard';
import { StarIcon } from '../sharedStyles/StarIcon';

const ShowCard = ({ data, isLiked, onFavBtnClicked }) => {
  const imgsrc = data.image ? data.image.medium : '/altImage.png';
  const name = data.name;
  const type = data.type;
  const showId = data.id;
  const smry = data.summary
    ? data.summary
        .split(' ')
        .slice(0, 15)
        .join(' ')
        .replaceAll(/<[^>]+>/g, '') + '...'
    : 'No Summary Found';

  const starBtnRef = useRef();

  const handleStarClick = () => {
    onFavBtnClicked(showId);

    const starBtnEl = starBtnRef.current;

    if (!starBtnEl) return;

    if (isLiked) {
      starBtnEl.classList.remove('animate');
    } else {
      starBtnEl.classList.add('animate');
    }
  };

  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={imgsrc} alt={`${name} image`}></img>
      </SearchImgWrapper>
      <div>
        <h1>Show Name: {name}</h1>
      </div>
      <div>
        <h3>Show Type: {type}</h3>
      </div>
      <div>
        <h3>Show ID: {showId}</h3>
      </div>
      <p>Summary: {smry}</p>
      <ActionSection>
        <div>
          <Link to={`/shows/${showId}`}>Show Page Details</Link>
        </div>
        <div>
          <StarBtn ref={starBtnRef} type="button" onClick={handleStarClick}>
            <StarIcon active={isLiked} />
          </StarBtn>
        </div>
      </ActionSection>
    </SearchCard>
  );
};
export default ShowCard;

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  &.animate {
    ${StarIcon} {
      animation: increase 0.75s ease-in forwards;
      @keyframes increase {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(3) rotate(45deg);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;
