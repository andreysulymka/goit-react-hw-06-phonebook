import { useState} from "react";
import List from "./List/List";
import ContactEditor from "./ContactEditor/ContactEditor";
import { nanoid } from 'nanoid';
import { Filter } from "./Filter/Filter";
import { Container } from "./App.styled";
import { useDispatch, useSelector } from "react-redux";
import { addContact} from "../redux/contactsSlice";


export default function App () {

const [filter, setFilter] = useState('');
const dispatch = useDispatch();
const contacts = useSelector((state) => state.contacts.contacts);
console.log(contacts); 

 
    const addNewContact = (data) => {
    const existingContact = contacts.find(
      element => element.name.toLowerCase() === data.name.toLowerCase()
    );
    if (existingContact) {
      window.alert(`${data.name} is already in contacts`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number
    };
    dispatch(addContact(newContact));
  };

  const changeFilter = (e) => {
    const value = e.currentTarget.value;
    if (value === undefined) {
      setFilter('');
    } else {
      setFilter(value);
    }
  };

 const getVisibleContacts = () => {
    
    const normalizedContacts = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedContacts))
  }
   
  const visibleContacts = getVisibleContacts();
return (
       <Container>
         <h1>Phonebook</h1>
         <ContactEditor addNewContact={addNewContact} />
         <h2>Contacts</h2>
         <Filter value={filter} onChange={changeFilter}/>
         <List contacts={visibleContacts}/>
         </Container>
    )
}
   
  

 