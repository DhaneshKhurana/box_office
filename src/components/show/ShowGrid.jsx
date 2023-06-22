import ShowCard from './ShowCard';

export default function ShowGrid({ result }) {
  return (
    <div>
      {result.map((data, idx) =>
        //<div key={data.show.id}>{data.show.name}</div>
        data.show ? (
          <ShowCard key={data.show.id} data={data.show} />
        ) : (
          <div key={idx}>Irr relevenat data</div>
        )
      )}
    </div>
  );
}
