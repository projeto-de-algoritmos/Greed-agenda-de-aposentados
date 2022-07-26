import { Button, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useState } from 'react';
import montaGrade from './intervalScheduling';

export function Schedule({activities}){
  const row = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [column, setColumn] = useState([]);

  const criarGrid = () => {
    console.log(montaGrade(activities));
    setColumn(montaGrade(activities));
  };

  console.log(column, row)

  return (
    <>
      {column !== undefined && (
        <Table width={"75%"} marginY="5%">
          <Thead>
            <Tr>
              <Th>Horário</Th>
              <Th>Segunda</Th>
              <Th>Terça</Th>
              <Th>Quarta</Th>
              <Th>Quinta</Th>
              <Th>Sexta</Th>
              <Th>Sábado</Th>
            </Tr>
          </Thead>
          <Tbody>
            {row.map((rowIndex) => (
              <Tr key={rowIndex}>
                <Td>{rowIndex+8}h</Td>
                {column.map((col, index) => (
                    console.log(index),
                  // col[rowIndex] !== undefined ? (
                    <Td>{col[rowIndex]}</Td>
                  // ) : (
                  //   <Td>-</Td>
                  // )
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
      <div className="contentButton">
      <Button
        onClick={() => criarGrid()}
      >
        Criar Grade
      </Button>
    </div>
  </>
  )
}