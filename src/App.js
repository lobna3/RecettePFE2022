import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import Navbare from './components/Navbar';
import Footer from './components/Footer';
import Dashbord from './components/Dashbord';
import SideBar from './components/SideBar';
import AlertProtection from './components/AlertProtection';
import Recette from './components/recette/Recette';
import Devis from './components/devis/Devis';
import AjoutDevis1 from './components/devis/AjoutDevis1';
import Facture from './components/factures/Facture';
import Commande from './components/commandes/Commande';
import Ventes from './components/ventes/Vente';
import Brouillon from './components/brouillon/Brouillon';
import TestForm from './components/TestForm';
 //import ProtectedRoute from './components/ProtectedRoute';
import {store} from './components/store';
import {Provider}   from 'react-redux';
import {Routes, Route}  from 'react-router-dom';
import { useState } from 'react';


function App() {

  const [user, setUser]= useState(null)
  const login=()=> setUser({name:"test", role:"admin"})
  const logout=()=> setUser(null)

  return (
    
    <div className="App">
      <Provider store={store}>
      <Navbare/>
      <SideBar/>
      
      {!user? 
      <button onClick={login}> se connecter</button> : 
      <button onClick={logout}> se déconnecter</button>}

      <Routes>
        
        <Route path='/*' element={<p>There's nothing here : 401 !</p>}/>  
        <Route path='/login/:id' element={<Login />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/recette' element={<Recette/>}/>
        <Route path='/devis' element={<Devis/>}/>
        <Route path='/factures' element={<Facture/>}/>
        <Route path='/commandes' element={<Commande/>}/>
        <Route path='/ventes' element={<Ventes/>}/>
        <Route path='/brouillon' element={<Brouillon/>}/>
        <Route path='/not_connected' element={<AlertProtection />}/>
        <Route path='/' element={<Dashbord />}/>
        <Route path='/ajouter_devis1' element={<AjoutDevis1 />}/>
        <Route path='/test' element={<TestForm />}/>
      </Routes>
    
      <Footer/>
    </Provider>
   
    </div>
  );
}

export default App;



/* <Provider store={store}>
      
        <Navbare/>
        {!user? 
        <button onClick={login}> se connecter</button> : 
        <button onClick={logout}> se déconnecter</button>}
        <Routes>
          <Route path='/*' element={<p>There's nothing here : 401 !</p>}/>  
          <Route path='/login/:id' element={<Login />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/dashbord' element={<ProtectedRoute user={user}><Dashbord/></ProtectedRoute>}/>
          <Route path='/admin' element={<ProtectedRoute user={user && user.role ==="admin"}><Admin/></ProtectedRoute>}/>
          <Route path='/not_connected' element={<AlertProtection />}/>
        </Routes>
        <Footer/>
      </Provider>*/


