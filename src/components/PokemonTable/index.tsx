import React from 'react';
import * as Styled from './styles';

interface PokemonDimensions {
  minimum: string;
  maximum: string;
}

export interface PokemonTableData {
  weight: PokemonDimensions;
  height: PokemonDimensions;
  classification: string;
}

interface PokemonTableProps {
  data: PokemonTableData;
}

const PokemonTable = ({ data }: PokemonTableProps) => {
  const columns = [
    {
      key: 'Weight',
      value: `${data.weight.minimum} to ${data.weight.maximum}`,
    },
    {
      key: 'Height',
      value: `${data.height.minimum} to ${data.height.maximum}`,
    },
    {
      key: 'Classification',
      value: `${data.classification}`,
    },
  ];

  return (
    <Styled.Table>
      <Styled.TableHead>
        <Styled.TableRow>
          <Styled.TableHeader>Key</Styled.TableHeader>
          <Styled.TableHeader>Value</Styled.TableHeader>
        </Styled.TableRow>
      </Styled.TableHead>
      <Styled.TableBody>
        {columns.map(({ key, value }, index) => (
          <Styled.TableRow key={index}>
            <Styled.TableData>{key}</Styled.TableData>
            <Styled.TableData>{value}</Styled.TableData>
          </Styled.TableRow>
        ))}
      </Styled.TableBody>
    </Styled.Table>
  );
};

export default PokemonTable;
