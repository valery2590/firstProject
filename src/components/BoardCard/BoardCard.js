import "./BoardCard.css";

const BoardCard = ({board}) => {

    console.log(board);
    return (
        <div className="boardCard__container">
        <div className="boardCard_info__container">
        <span className="boardCard_info__board__title">{}</span>
        <span className="boardCard_info__board__number">12 pins</span>   
      </div>
    </div>
    );
};

export default BoardCard;
