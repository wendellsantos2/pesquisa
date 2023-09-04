import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { SidebarContainer, ContentContainer, Title, Subtitle } from './style';
import { ProductsContainer } from '../Products/style';
import DataTable from '../../components/DataTable';
import { useSearch } from '../../components/SearchContext';

interface Category {
  id: number;
  name: string;
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>('Categories');
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);
  const { searchQuery } = useSearch(); // Use o hook useSearch

  useEffect(() => {
    axios.get('http://localhost:5000/categories')
      .then(response => setCategories(response.data));  
  }, []);

  // Filtre as categorias com base na searchQuery
  useEffect(() => {
    if (searchQuery) {
      const results = categories.filter(category => 
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCategories(results);
    } else {
      setFilteredCategories(categories);
    }
  }, [searchQuery, categories]);

  return (
    <>
      <Navbar />
      <ProductsContainer>
        <SidebarContainer>
          <Sidebar setSelectedOption={setSelectedOption} />
        </SidebarContainer>
        <ContentContainer>
          <Title>Categorias</Title> {/* Atualizado o título para "Categorias" */}
          <Subtitle>{selectedOption}</Subtitle>
          {selectedOption === 'Categories' && <DataTable items={filteredCategories} columns={['ID', 'Name']} />}
        </ContentContainer>
      </ProductsContainer>
    </>
  );
};

export default Categories;
