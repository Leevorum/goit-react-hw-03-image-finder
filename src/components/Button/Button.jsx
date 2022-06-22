export default function Button({ onCLick }) {
  return (
    <button className="Button" type="button" onClick={onCLick}>
      Load More
    </button>
  );
}
