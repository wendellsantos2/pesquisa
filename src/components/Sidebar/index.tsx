import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarContainer, SidebarList, SidebarItem } from './styles';

const Sidebar: React.FC<{ setSelectedOption: (option: string) => void }> = ({ setSelectedOption }) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOptionLocal] = React.useState<string | null>(null);

  const handleItemClick = (route: string, label: string) => {
    if (selectedOption !== label) {
      setSelectedOption(label);
      setSelectedOptionLocal(label); // Mantenha um estado local da opção selecionada
      navigate(route);
    }
  };

  return (
    <SidebarContainer>
      <SidebarList>
        <SidebarItem onClick={() => handleItemClick('/', 'Dashboard')}>Dashboard</SidebarItem>
        <SidebarItem onClick={() => handleItemClick('/products', 'Products')}>Products</SidebarItem>
        <SidebarItem onClick={() => handleItemClick('/categories', 'Categories')}>Categories</SidebarItem>
        <SidebarItem onClick={() => handleItemClick('/brands', 'Brands')}>Brands</SidebarItem>
      </SidebarList>
    </SidebarContainer>
  );
};

export default Sidebar;
