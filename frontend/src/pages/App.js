import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from '../services/principal';
import Login from '../services/login'; 
import Cadastro from '../services/cadastro'; 
import Configuracoes from '../services/config';
import Acervo from '../services/acervo';
import RecoverPassword from '../services/recuperar';
import BookDetails from '../services/Livro';
import CadastroLivro from '../services/livrosADM';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        <Route path="/acervo" element={<Acervo />} /> 
        <Route path="/recuperar-senha" element={<RecoverPassword />} />
        <Route path="/livro/:id" element={<BookDetails />} />
        <Route path="/apilivro" element={<CadastroLivro />} />
      </Routes>
    </Router>

  );
};

export default App;
