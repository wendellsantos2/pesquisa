import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
 

import { NavbarContainer, NavLinks, DropdownMenu, DropdownContent, DropdownItem, SearchBar } from './style';
import { useSearch } from '../SearchContext';

const Navbar: React.FC = () => {
  const location = useLocation();
  const { searchQuery, setSearchQuery } = useSearch(); // Use o hook useSearch

  useEffect(() => {
    // Resetar a consulta de busca quando a rota mudar
    setSearchQuery('');
  }, [location, setSearchQuery]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <NavbarContainer>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <DropdownMenu>
          <Link to="/brands">Brands</Link>
          <DropdownContent>
            <DropdownItem to="/brands/brand1">Brand 1</DropdownItem>
            <DropdownItem to="/brands/brand2">Brand 2</DropdownItem>
          </DropdownContent>
        </DropdownMenu>
      </NavLinks>
      {/* Adicionando uma barra de busca */}
      <SearchBar 
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder={`Search in ${location.pathname}`}
      />
    </NavbarContainer>
  );
};

export default Navbar;
