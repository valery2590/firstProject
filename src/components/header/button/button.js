import "./button.css";

const Button = ({text, onClick, className}) => {
  return (
    <div className="button_home" >
      <div className="button_container" onClick={onClick} >{text}</div>
      
    </div>
  );
};

export default Button;
