import styled from 'styled-components';


export const ProductsContainer = styled.div`
  display: flex; /* Use flexbox for layout */
  flex-grow: 1;
`;

export const SidebarContainer = styled.div`
  flex: 0 0 0px; /* Define a largura fixa do sidebar */
  background-color: #f5f5f5;
`;

export const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

export const Title = styled.h1`
  color: #333;
`;

export const Subtitle = styled.h2`
  color: #666;
`;
