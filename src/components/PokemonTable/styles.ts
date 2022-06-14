import styled from 'styled-components';

export const Table = styled.table`
  border-spacing: 0;
  width: 100%;
`;

export const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 1rem 0;
`;
export const TableRow = styled.tr`
  border: 1px solid black;
`;

export const TableData = styled.td`
  padding: 1rem;
  background-color: white;
  border: 1px solid #f1f1f1;
`;
export const TableHeader = styled.th`
  font-size: 2rem;
  padding: 1rem 0;
  border-bottom: 1px solid #998;
`;
export const TableBody = styled.tbody``;
