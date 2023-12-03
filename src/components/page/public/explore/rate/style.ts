import { GV } from '@/utils/style.util';
import styled from 'styled-components';

export const HitRatesContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 30px;
    background: ${props => props.theme.gray.ghost};
`;

export const Title = styled.div`
    font-family: ${GV('font3')};
    font-size: ${GV('font-size-3')};
    font-weight: 900;
    text-transform: uppercase;
`;

export const CustomButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    border: 1px solid ${GV('gray')};
    padding: 8px 20px;
    font-family: ${GV('font1')};
    font-size: ${GV('font-size')};
`;

export const THeader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 4rem;
    padding: 9px 72px;
    width: 100%;
    background: ${props => props.theme.gray.primary};
`;

export const TBody = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 4rem;
    padding: 9px 72px;
    width: 100%;
    background: ${props => props.theme.gray.main};
`;

export const CustomFont = styled.div`
    font-family: ${GV('font1')};
    font-size: ${GV('font-size')};
    color: ${GV('gray-300')};
`;

export const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: ${GV('gray')};
`;

export const ChartContainer = styled.div`
    width: 100%;
    height: 400px;
`