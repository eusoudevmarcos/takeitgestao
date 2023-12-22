import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/inicio">Início</Link></li>
          <li><Link to="/profissionais">Profissionais</Link></li>
          <li><Link to="/clinicas-e-hospitais">Clínicas e Hospitais</Link></li>
          <li><Link to="/area-de-funcionario">Área de Funcionário</Link></li>
          <li><Link to="/vagas-de-emprego">Vagas Disponíveis</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;