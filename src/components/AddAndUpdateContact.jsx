import { addDoc , collection , updateDoc ,doc } from "firebase/firestore";
import Modal from "./Modal";
import { Field, Form, Formik } from "formik";
import { db } from "../config/firebase";

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email ,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit= {(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values) 
          }}
        >
          <Form className="flex flex-col ">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field
                name="name"
                className="border-[1px] border-none rounded-xl h-7 px-2 "
              ></Field>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                className="border-[1px] border-none rounded-xl h-7 px-2 "
              ></Field>
            </div>
            <br />
            <button className="bg-red-600 px-3 py-1 rounded-2xl text-white self-end">
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
