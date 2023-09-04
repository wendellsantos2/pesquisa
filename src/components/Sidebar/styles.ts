import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 250px;
  background-color: #111;
  margin-top: 10px;
  margin-left: 10px;
`;

export const SidebarList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SidebarItem = styled.li`
  padding: 8px;
  text-align: center;
  color: white;

  &:hover {
    background-color: #575757;
    cursor: pointer;
  }
`;
