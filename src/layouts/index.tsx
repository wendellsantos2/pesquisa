import React from 'react';
import styled from 'styled-components';
import MainPage from '../pages';
  // Certifique-se de que este é o caminho correto para o seu componente MainPage

const LayoutContainer = styled.div`
  text-align: center;
`;

const MainLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <h1>Main Layout</h1>
      <MainPage />
    </LayoutContainer>
  );
};

export default MainLayout;
