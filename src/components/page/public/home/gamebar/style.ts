import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const GameBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const GameBarWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1.6rem 2.4rem;
  width: calc(100% + 2.4rem);
  margin-left: -2.4rem;
  background: ${props => props.theme.gray.ghost};
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

export const BrandsBar = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  flex: 1;
`;