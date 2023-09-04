import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import styled from 'styled-components';
import Sidebar from '../../components/Sidebar';
 

const DashboardContainer = styled.div`
  display: flex; /* Use flexbox for layout */
  flex-grow: 1;
`;

const SidebarContainer = styled.div`
  flex: 0 0 0px; /* Define a largura fixa do sidebar */
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  color: #333;
`;

 
 
const ContentContainer = styled.div`
flex-grow: 1;
padding: 20px;
`;


type Product = {
  id: number;
  name: string;
};

type Category = {
  id: number;
  name: string;
};

type Brand = {
  id: number;
  name: string;
};

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>('Produtos');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);

    Promise.all([
      axios.get('http://localhost:5000/products'),
      axios.get('http://localhost:5000/brands'),
      axios.get('http://localhost:5000/categories')
    ])
      .then(([productsRes, brandsRes, categoriesRes]) => {
        setProducts(productsRes.data);
        setBrands(brandsRes.data);
        setCategories(categoriesRes.data);
      })
      .catch((err) => {
        setError('Erro ao carregar dados.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
   <>
      <Navbar />
      <DashboardContainer>
        <SidebarContainer>
          <Sidebar setSelectedOption={setSelectedOption} />
        </SidebarContainer>
        <ContentContainer>
  <Title>Dashboard</Title>
  {isLoading ? (
    <p>Carregando...</p>
  ) : error ? (
    <p>{error}</p>
  ) : (
    <>
      <Title>Produtos</Title>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>

      <h2>Marcas</h2>
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>{brand.name}</li>
        ))}
      </ul>

      <h2>Categorias</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </>
  )}
</ContentContainer>
      </DashboardContainer>
    </>
  );
};

 


export default Dashboard;
