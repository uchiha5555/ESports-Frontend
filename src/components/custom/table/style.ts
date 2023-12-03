import { ModeContext } from '@/context';
import { GV } from '@/utils/style.util';
import styled from 'styled-components';

export const StyledTh = styled.div<{ $width?: string }>`
  flex: ${({ $width }) => ($width ? `1 1 ${$width}px` : `1`)};
  display: flex;
  min-width: fit-content;
  ${({ $width }) => ($width ? `width: ${$width};` : ``)}
  padding: 1rem 0.4rem;
  font-size: ${GV('font-size-4')};
  font-family: ${GV('font1')};
  color: ${props => props.theme.text};
`;

export const StyledTd = styled.div<{ $align?: string; $width?: string }>`
  flex: ${({ $width }) => ($width ? `1 1 ${$width}px` : `1`)};
  /* min-width: fit-content; */
  overflow: hidden;
  ${({ $align }) => ($align ? `align-items: ${$align};` : ``)}
  ${({ $width }) => ($width ? `width: ${$width};` : ``)}
  padding: 1rem 0.4rem;
  color: ${props => props.theme.text};
`;

// export const StyledTr = styled.div`
//   display: flex;
//   gap: 1rem;
//   padding: 1rem 1.5rem;
//   background: #191919;
//   height: 4.5rem;
// `;

export const StyledTable = styled.div<{ $gct: string[], mode: boolean }>`
  display: grid;
  grid-template-columns: ${({ $gct }) => $gct.join(' ')};
  grid-row-gap: 0.1rem;
  grid-column-gap: 0;
  background: ${props => props.theme.table.main};

  > * {
    /* display: table; */
  }

  ${({ $gct, mode }) => `
    ${$gct
      .map(
        (i, k) =>
          (k === 0 ? `` : `,`) + `\n>div:nth-child(${$gct.length * 2}n + ${k + 1})`
      )
      .join('')} {
      background: ${mode ? '#111111' : '#ffffff'};
    }
  `}
  ${({ $gct, mode }) => `
    ${$gct
      .map(
        (i, k) =>
          (k === 0 ? `` : `,`) + `\n>div:nth-child(${$gct.length * 2}n - ${k})`
      )
      .join('')} {
        background: ${mode ? '#111111' : '#ffffff'};
    }
  `}
`;

export const TableContainer = styled.div`
  width: 100%;
`;
