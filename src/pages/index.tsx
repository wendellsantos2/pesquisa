import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
`;

const MainPage: React.FC = () => {
  return (
    <PageContainer>
      <h1>Welcome to the Main Page</h1>
      <p>This is your main content.</p>
    </PageContainer>
  );
};

export default MainPage;
