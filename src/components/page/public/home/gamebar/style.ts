import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const GameBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1471px;
  background: ${props => props.theme.palette.ghost};
`;

export const GameBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.6rem 0;
  width: calc(100% + 2.4rem);
  max-width: 1408px;

  @media screen and (max-width: 475px){
    width: 100%;
    padding: 1.6rem 0;
  }
`;

export const GameBarTitle = styled.div`
  font-family: ${GV('font1')};
  font-weight: 100;
  font-size: ${GV('font-size')};
  color: ${props => props.theme.text};
`;

export const GameBarSubTitle = styled.div`
  font-family: ${GV('font1')};
  font-weight: 100;
  font-size: ${GV('font-size')};
  color: #545454;
`;

export const TitleBar = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  @media (max-width: 1440px) {
    display: none;
  }
`

export const BrandsBar = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
  gap: 5rem;
  @media screen and (max-width: 475px){
    width: 100%;
    position: relative;
  }
`;

export const SwiperContainer = styled.div`
  display: none;
 @media screen and (max-width: 475px){  
  display: block;
  width: 100%;
  padding-left: 20px;
 }
`
export const ItemContainer = styled.div`
display: block;
display: flex;
  align-items: center;
  gap: 5rem;
  flex: 2;
 @media screen and (max-width: 475px){  
  display: none;
 }
  
`