import { HiOutlineUserCircle } from "react-icons/Hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useState } from "react";
import AddAndUpdateContact from "./AddAndUpdateContact";

const ContactCard = ({ contact }) => {
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id)); // 'contacts' should match your collection name in firebase
    } catch (error) {
      console.log(error);
    }
  };

  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        key={contact.id}
        className="bg-red-500 rounded-lg p-2 flex justify-between items-center"
      >
        <div className="flex gap-2 items-center">
          <HiOutlineUserCircle className="text-4xl  text-red-900" />
          <div className="text-white">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>

        <div className="flex text-3xl">
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer hover:text-white" />
          <IoMdTrash onClick={() => deleteContact(contact.id)} className="text-red-900 cursor-pointer hover:text-black" />
        </div>
      </div>
      <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ContactCard;
