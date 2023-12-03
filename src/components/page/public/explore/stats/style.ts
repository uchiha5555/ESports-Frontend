import { Span } from "@/components/basic";
import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const StatsContainer = styled.div`
    background: ${props => props.theme.gray.ghost};
    width: 100%;
    max-width: 350px;
    padding: 2rem;
`;

export const Title = styled.div`
    font-family: ${GV('font3')};
    font-size: ${GV('font-size-3')};
    font-weight: 900;
    text-transform: uppercase;
`;

export const ChartContainer = styled.div`
    width: 300px;
    height: 300px;
`;

export const CustomFont = styled(Span)`
    font-family: ${GV('font1')};
`