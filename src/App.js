import 'bootstrap/dist/css/bootstrap.min.css';
import UsersList from './components/UsersList';
import NewUser from './components/input';
import Edit from './components/edit';
import{Routes,Route } from 'react-router-dom';
import Output from './components/output';

function App() {
    return(
    <Routes>
        
        <Route path='/' element={<UsersList/>}/>
        <Route path='/new' element={<NewUser/>} />
        <Route path='/edit/:id' element={<Edit/>} />
        <Route path='/showUser/:id' element={<Output/>} />
        
        
    </Routes>
    
    
    
    )
};

export default App;