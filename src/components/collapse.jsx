import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Collapse({transaction}) {
    const [isOpen, setIsOpen] = useState(false);
    const [chevronPosition, setChevronPosition] = useState("up")
    const collapseContentRef = useRef();
        
    const toggleDropdown = () => {
        if(isOpen) {
            setIsOpen(false);
            setChevronPosition("up");
        } else {
            setIsOpen(true);
            setChevronPosition("down");
        }
    }

    return (
        <div className="collapse">
            <button className="top-bar">
                <FontAwesomeIcon icon={faChevronUp} className={"chevron " + chevronPosition} onClick={toggleDropdown}></FontAwesomeIcon>
                <p>{transaction.date}</p>
                <p>{transaction.description}</p>
                <p>{transaction.amount}</p>
                <p>{transaction.balance}</p>
            </button>
            <div ref={collapseContentRef} className="collapse-content" style={isOpen ? {height : collapseContentRef.current.scrollHeight + "px"} : {height: "0px"}}>
                <ul className="collapse-text">
                    <li>Transaction Type: Electronic</li>
                    <li>Category: Food <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon></li>
                    <li>Notes: <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon></li>
                </ul>
            </div>
        </div>
    );
}

export default Collapse;