
import { useEffect, useState } from "react";
import "./PinsList.css";
import PinCard from "../pinCard/PinCard";

const PinsList = () => {
  const [pins, setPins] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/Pins")
      .then((response) => response.json())
      .then((json) => setPins(json))
      .then (data => console.log(data));
  }, []);

  return (
    <div>
      <span className="pinsList__title">Pins</span>
      <div className="pinsList__container">
        {pins.map((pin) => (
          <PinCard pin={pin} key={pin.id} />
        ))}
      </div>
    </div>
  );
};

export default PinsList;