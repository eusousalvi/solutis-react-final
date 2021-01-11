function RoomsCard({ title, content, footer }) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">{content}</div>
    </div>
  );
}

export default RoomsCard;
