import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const OptionContainer = styled.div`
    background: ${props => props.theme.gray.ghost};
    height: 185px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const OptionWrapper = styled.div`
    width: 100%;
    height: 100%;

`

export const CustomFont = styled.div`
    font-family: ${GV('font3')};
    font-weight: 900;
    font-size: ${GV('font-size-3')};
    text-transform: uppercase;
`;

export const SelectionBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 9px;
    background: ${GV('gray-500')};
`;

export const SelectionItem = styled.div<{ isActive?: boolean }>`
    padding: 9px 12px;
    font-family: ${GV('font1')};
    ${({ isActive }) => isActive && `background: ${GV('primary')};`}
    cursor: pointer;
    font-size: ${GV('font-size')};
`;

export const CustomButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 20px;
    width: 155px;
    border: 1px solid ${GV('gray')};
    font-family: ${GV('font1')};
    font-size: ${GV('font-size')};
`