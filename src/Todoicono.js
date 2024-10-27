import { ReactComponent as Iconcheck } from "./checkicon.svg";
import { ReactComponent as Deleteicon } from "./deleteIcon.svg";
import './Todoicono.css';
  
  

const icontypes={
"check":(color) => <Iconcheck className="icon-svg" fill={color}/>,
"delete":(color) => <Deleteicon className="icon-svg" fill={color}/>,
};

function Todoicono({ type, color, onClick }) {
  return (
    <span className={` clickTodoListo todoDelete click_Icon-${type}`}
      
      onClick={onClick}>
        {icontypes[type](color)}
    </span>
  );
}
export { Todoicono };