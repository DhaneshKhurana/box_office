import ShowCard from './ShowCard';
import { useStorageHook } from '../../logic/custom_hooks';
import { FlexGrid } from '../sharedStyles/FlexGrid';

const LIKE = 'like';
const UNLIKE = 'unlike';

export default function ShowGrid({ result, favChanged }) {
  const [favShows, showLikeChanged] = useStorageHook({
    initVal: [],
    storeKey: 'favShows',
  });

  const onFavBtnClicked = showId => {
    if (favShows.includes(showId)) {
      showLikeChanged({ type: UNLIKE, showId: showId });
      if (favChanged) favChanged(favShows.filter(val => val !== showId));
    } else {
      showLikeChanged({ type: LIKE, showId: showId });
    }
  };

  if (result) {
    return (
      <FlexGrid>
        {result.map((data, idx) => {
          if (data) {
            const isLiked = favShows.includes(data.show.id) ? true : false;
            return data.show ? (
              <ShowCard
                key={data.show.id}
                data={data.show}
                isLiked={isLiked}
                onFavBtnClicked={onFavBtnClicked}
              />
            ) : (
              <div key={idx}>Irr relevant data</div>
            );
          } else {
            return <div key={idx}>Still Loading show data</div>;
          }
        })}
      </FlexGrid>
    );
  } else {
    return <div>Still Loading</div>;
  }
}
