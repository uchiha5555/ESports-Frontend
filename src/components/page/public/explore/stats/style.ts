import { Span } from "@/components/basic";
import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const StatsContainer = styled.div`
    background: ${props => props.theme.palette.ghost};
    width: 100%;
    max-width: 328px;
    padding: 2rem 0;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Title = styled.div`
    font-family: ${GV('font3')};
    font-size: ${GV('font-size-3')};
    font-weight: 900;
    text-transform: uppercase;
    color: ${props => props.theme.text};
`;

export const ChartContainer = styled.div`
    width: 100%;
    height: 300px;
`;

export const CustomFont = styled(Span)`
    font-family: ${GV('font1')};
`;

export const TableContainer = styled.div`
    padding: 0 2rem 2rem;
`