import { useEffect, useState } from "react";
import "./BoardCard.css";

const BoardCard = ({ board }) => {
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    fetch ("http://localhost:5000/api/Boards")
    .then (res => res.json())
    .then (data => console.log(data));
  },[]);

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
