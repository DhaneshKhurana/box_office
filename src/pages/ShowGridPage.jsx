import ShowCard from '../components/show/ShowCard';
import { useStorageHook } from '../logic/custom_hooks';

const LIKE = 'like';
const UNLIKE = 'unlike';

export default function ShowGridPage({ result, favChanged }) {
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
      <div>
        {result.map((data, idx) => {
          if (data) {
            const favBtn = favShows.includes(data.show.id) ? 'Unlike' : 'Like';
            return data.show ? (
              <ShowCard
                key={data.show.id}
                data={data.show}
                favBtn={favBtn}
                onFavBtnClicked={onFavBtnClicked}
              />
            ) : (
              <div key={idx}>Irr relevant data</div>
            );
          } else {
            return <div key={idx}>Still Loading show data</div>;
          }
        })}
      </div>
    );
  } else {
    return <div>Still Loading</div>;
  }
}
