import React, { ReactNode } from "react";
import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";


const tableStyles: SerializedStyles = css`
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-size: 16px;

`;

const thStyles: SerializedStyles = css`
  padding: 8px;
  background-color: #f2f2f2;
  text-align: left;
`;

const tdStyles: SerializedStyles = css`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const TableContainer = styled.table`
  ${tableStyles}
  @media (max-width: 730px){
    width: 23rem;
    margin-right: 30px;
  }
`;

const TableHeader = styled.th`
  ${thStyles}
`;

const TableData = styled.td`
  ${tdStyles}
`;

type TableProps = {
  headers: string[];
  data: (string | ReactNode | undefined)[][];
};

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <TableContainer>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <TableHeader key={index}>{header}</TableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => (
              <TableData key={index}>{cell}</TableData>
            ))}
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default Table;