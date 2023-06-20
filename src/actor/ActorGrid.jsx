import PCard from './ActorCard';

export default function ActorGrid({ result }) {
  return (
    <div>
      {result.map((data, idx) =>
        data.person ? (
          <PCard key={data.person.id} data={data.person} />
        ) : (
          <div key={idx}>Irr relevenat data</div>
        )
      )}
    </div>
  );
}
