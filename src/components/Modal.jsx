import { AiOutlineClose } from "react-icons/Ai";
import {createPortal} from "react-dom";

const Modal = ({onClose,isOpen,children}) => {




  return createPortal(
    <>
    {isOpen &&(
       <>
        <div className="relative z-50 min-h-[200px] max-w-[60%] bg-white mx-auto p-4  rounded-lg bg-opacity-40 ">
        <div className="flex justify-end">
            <AiOutlineClose onClick={onClose} className="text-2xl self-end "/>
        </div>
        {children}
        </div>
        <div onClick={onClose} className=" absolute top-0 backdrop-blur h-screen w-screen z-40"/>
        </>
    )}
    
    </>
  ,document.getElementById("modal-root"));
};

export default Modal