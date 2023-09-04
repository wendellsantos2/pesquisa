import React from 'react';
 
import { StyledTable } from './style';



type DataTableProps = {
  items: Array<{ id: number; name: string }>,
  columns: string[],
};

const DataTable: React.FC<DataTableProps> = ({ items, columns }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default DataTable;


