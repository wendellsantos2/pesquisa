import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from '../../components/Navbar';
import { BrandsContainer } from '../Brands/style';
import Sidebar from '../../components/Sidebar';
import { ContentContainer, ProductsContainer, SidebarContainer, Subtitle, Title } from '../Products/style'; // Considere refatorar isso
import DataTable from '../../components/DataTable';
import { useSearch } from '../../components/SearchContext';

interface Brand {
  id: number;
  name: string;
}

const Brands: React.FC = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>('Brands');
  
  const { searchQuery } = useSearch(); // Use o hook useSearch
  const [filteredBrands, setFilteredBrands] = useState<Brand[]>([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/brands')
      .then(response => setBrands(response.data));
  }, []);
  
  // Filtre as marcas com base na searchQuery
  useEffect(() => {
    if (searchQuery) {
      const results = brands.filter(brand => 
        brand.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBrands(results);
    } else {
      setFilteredBrands(brands);
    }
  }, [searchQuery, brands]);

  return (
    <>
      <Navbar />
      <BrandsContainer>
        <SidebarContainer>
          <Sidebar setSelectedOption={setSelectedOption} />
        </SidebarContainer>
        <ContentContainer>
          <Title>Marcas</Title> {/* Atualizado para "Marcas" */}
          <Subtitle>{selectedOption}</Subtitle>
          {selectedOption === 'Brands' && <DataTable items={filteredBrands} columns={['ID', 'Name']}/>} {/* Usando filteredBrands aqui */}
        </ContentContainer>
      </BrandsContainer>
    </>
  );
};

export default Brands;
