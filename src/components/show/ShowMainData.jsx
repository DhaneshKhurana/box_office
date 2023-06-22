//import React from 'react';

const IMG_PLACEHOLDER = '/altImage.png';
//import { Star } from '../styled';
//import { MainDataWrapper, Headline, TagList } from './ShowMainData.styled';

const ShowMainData = ({ name, rating, summary, tags, image }) => {
  return (
    <div>
      <img src={image ? image.original : IMG_PLACEHOLDER} alt="show-cover" />
      <div className="text-side">
        <div>
          <h1>{name}</h1>
          <div>
            <div />
            <span>{rating.average || 'N/A'}</span>
          </div>
        </div>
        <div
          className="summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        />

        <div>
          Tags:{' '}
          <div>
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShowMainData;
