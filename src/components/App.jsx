
import List from "./List/List";
import ContactEditor from "./ContactEditor/ContactEditor";
import { Filter } from "./Filter/Filter";
import { Container } from "./App.styled";




export default function App () {

 
return (
       <Container>
         <h1>Phonebook</h1>
         <ContactEditor />
         <h2>Contacts</h2>
         <Filter/>
         <List />
         </Container>
    )
}
   
  

 