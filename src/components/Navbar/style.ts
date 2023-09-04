import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export const Logo = styled.img`
  width: 50px;
  height: auto;
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
`;

export const SearchBar = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: none;
`;

export const DropdownMenu = styled.div`
  position: relative;

  &:hover div {
    display: block;
  }
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;

export const DropdownItem = styled(Link)`
  color: black;
  padding: 12px 16px;
  display: block;
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileName = styled.span`
  margin-right: 10px;
  color: white;
`;

export const UserProfileLink = styled(Link)`
  color: white;
`;
