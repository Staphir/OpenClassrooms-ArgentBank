import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";

function Collapse({transaction}) {
    const [isOpen, setIsOpen] = useState(false);
    const collapseContentRef = useRef();

    const toggleDropdown = () => {
        if(isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    return (
        <div className="relative my-0.5">
            <button className="flex justify-between items-center gap-3 w-full bg-white border border-stone-500 p-2 text-xs text-left pl-8 desktop:min-h-12" style={isOpen ? {borderBottom: "0"} : {borderBottom: "1px"}}>
                <FontAwesomeIcon icon={faChevronUp} className="text-[#2c3e50] absolute left-3 top-3 desktop:top-5 transition-transform" style={isOpen ? {transform: "rotate(0deg)"} : {transform: "rotate(-180deg)"}} onClick={toggleDropdown}></FontAwesomeIcon>
                <p className="w-1/4 text-nowrap overflow-hidden text-ellipsis text-center">{transaction.date}</p>
                <p className="w-1/4 text-nowrap overflow-hidden text-ellipsis text-center">{transaction.description}</p>
                <p className="w-1/6 text-nowrap overflow-hidden text-ellipsis text-center">{transaction.amount}</p>
                <p className="w-1/6 text-nowrap overflow-hidden text-ellipsis text-center">{transaction.balance}</p>
            </button>
            <div ref={collapseContentRef} className="bg-white text-xs overflow-hidden border border-t-0 border-stone-500 transition-height duration-300" style={isOpen ? {height : collapseContentRef.current.scrollHeight + "px"} : {height: "0px"}}>
                <ul className="text-left pl-8 desktop:pl-10">
                    <li className="text-nowrap overflow-hidden text-ellipsis mb-2">Transaction Type: Electronic</li>
                    <li className="text-nowrap overflow-hidden text-ellipsis mb-2">Category: Food <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon></li>
                    <li className="text-nowrap overflow-hidden text-ellipsis mb-2">Notes: <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon></li>
                </ul>
            </div>
        </div>
    );
}

export default Collapse;