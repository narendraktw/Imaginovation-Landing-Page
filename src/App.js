import React from 'react';
import './App.css';
import Header from './component/header/Header';
import CustomerValue from'./component/customerValue/CustomerValue';
import ClientDetails from'./component/clientDetails/ClientDetails';
import OurWork from'./component/ourWork/OurWork';
import Services from'./component/services/Services';
import Footer from'./component/footer/Footer';


function App() {
  return (
    <main className="app">
    
     <Header />
       <CustomerValue />
      <ClientDetails />
      <OurWork />
      <Services/>
      <Footer />
    </main>
  );
}

export default App;
