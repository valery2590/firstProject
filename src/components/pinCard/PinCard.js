import "./PinCard.css";

const PinCard = ({ pin }) => {
  return (
    <div className="pinCard__container">
      <img src={pin.urlImage} className="pinCard__image" alt={pin.name} />
      <div className="pinCard_info__container">
        <span className="pinCard_info_pin__title">{pin.name}</span>
      </div>
    </div>
  );
};

export default PinCard;