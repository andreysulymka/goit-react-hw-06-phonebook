import React from "react";
import { Item, Button } from "./List.styled";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/contactsSlice";
import { filtersSlice } from "redux/filterSlice";



const List = ({ contacts}) => {
     const dispatch = useDispatch();
     const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };
  const filter = useSelector(state => state.filters);

const getVisibleContacts = () => {
    
  const normalizedContacts = filter.toLowerCase();
  return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedContacts))
}
  const visibleContacts = getVisibleContacts();

return (<ul>{visibleContacts.map(({ id, name, number }) => <Item key={id}><p>{name}</p><p>{number}</p>
        <Button onClick={() => onDeleteContact(id)}>Delete</Button></Item>)}</ul>)
}

export default List;

List.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
    })
    ),    
};