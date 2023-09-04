import Navbar from '../../components/Navbar';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';
import DataTable from '../../components/DataTable';
import { SidebarContainer, ContentContainer, Title, Subtitle, ProductsContainer } from './style';
import { useSearch } from '../../components/SearchContext';
 

type Product = {
  id: number;
  name: string;
  brandId: number;
  categoryId: number;
};

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>('Products');
  
  const { searchQuery } = useSearch(); // Use o hook useSearch

  useEffect(() => {
    axios.get('http://localhost:5000/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  // Filtre os produtos com base na searchQuery
  useEffect(() => {
    if (searchQuery) {
      const results = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  return (
    <>
      <Navbar />
      <ProductsContainer>
        <SidebarContainer>
          <Sidebar setSelectedOption={setSelectedOption} />
        </SidebarContainer>
        <ContentContainer>
          <Title>Produtos</Title>
          <Subtitle>{selectedOption}</Subtitle>
          {selectedOption === 'Products' && <DataTable items={filteredProducts} columns={['ID', 'Name' ]} />}
        </ContentContainer>
      </ProductsContainer>
    </>
  );
};

export default Products;
