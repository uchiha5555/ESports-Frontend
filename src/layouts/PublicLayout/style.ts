import styled from "styled-components";

export const PublicLayoutContainer = styled.div`
    position: relative;
    
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: ${props => props.theme.background};
`
