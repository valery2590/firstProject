import "./BoardCard.css";

const BoardCard = ({ board }) => {
  
    fetch (`http://localhost:3000/api/boards`)
    .then (res => res.json())

  console.log(board);
  return (
    <div className="boardCard__container">
      <div className="boardCard_info__container">
        <span className="boardCard_info__board__title">{board}</span>
        <span className="boardCard_info__board__number">12 pins</span>
      </div>
    </div>
  );
};

export default BoardCard;
