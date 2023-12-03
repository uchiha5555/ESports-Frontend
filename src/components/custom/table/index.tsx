import { StyledTable, StyledTd, StyledTh, TableContainer } from './style';
import React, { useContext } from 'react';
import { ModeContext } from '@/context';

export interface TableFieldInterface {
  key: string;
  label: string;
  render: (data: any, value: any, index: number) => string | number | React.ReactNode;
  width?: string;
  sort?: (data: any, value: any, index: number) => void;
  description?: string;
}

interface TablePropsInterface {
  fields: TableFieldInterface[];
  data: object[];
}

const Table = ({ fields, data }: TablePropsInterface) => {
  const { mode } = useContext(ModeContext);
  return (
    <TableContainer>
      <StyledTable $gct={fields.map(i => i.width ?? '1fr')} mode={mode.toString()}>
        <React.Fragment>
          {fields.map((field, i) => (
            <StyledTh key={i} $width={field.width}>
              {field.label}
              {/* {field.sort !== null && (
								<FilterSvg />
							)} */}
            </StyledTh>
          ))}
        </React.Fragment>
        {data.map((item: { [key: string]: any }, di: number) => (
          <React.Fragment key={di}>
            {fields.map((field, fi: number) => (
              <StyledTd key={'td' + fi} $width={field.width}>
                {field.render(item, item[field.key], di)}
              </StyledTd>
            ))}
          </React.Fragment>
        ))}
      </StyledTable>
    </TableContainer>
  );
};

export default Table;
