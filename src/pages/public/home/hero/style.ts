import styled, { keyframes } from 'styled-components';
import { GV } from '@/utils/style.util';

export const HeroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.component.secondary};
  z-index: 0;
`;



export const BreadcrumbContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  width: 100%;
`;

export const Breadcrumb = styled.div`
  font-family: ${GV('font2')};
  font-size: ${GV('font-size')};
  font-weight: 400;
  margin-top: 10px;

  span{
    color: #ACACAC;
  }
`;


export const PlayerLetter = styled.div`
  color: 'white-100';
  text-align: right;
  font-family: 'Inter';
  font-size: 100px;
  font-style: normal;
  font-weight: 500;
  line-height: 100px; /* 100% */
  letter-spacing: -5px;
  text-transform: uppercase;
  opacity: 0.1;
`;

export const UserInfoContainer = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
`

export const UserInfo = styled.div`
  display: flex;
  gap: 4rem;
  margin-top: -1.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;
`;

export const AvatarContainer = styled.div`
  width: 430px;
  height: auto;
`;

export const BackAvatarContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: -65px;
  opacity: 0.1;
  z-index: -1;
  width: auto;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1.5rem;
  padding-top: 1.5rem;
`;

export const CustomLetter = styled.div`
  font-size: 50px;
  font-family: ${GV('font2')};
  letter-spacing: -1.5px;
  text-transform: uppercase;
  font-weight: 500;
`;

export const LinkLetter = styled.div`
  font-size: ${GV('font-size-5')};
  font-family: ${GV('font1')};
  text-decoration-line: underline;
  text-transform: uppercase;
`;

export const CustomButton = styled.div`
  position: relative;

  font-size: ${GV('font-size-5')};
  font-family: ${GV('font1')};
  text-transform: uppercase;
  border: 1px solid ${GV('gray-300')};
  
  /* Apply border to each corner */
  &::after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 10px;
    height: 10px;
    border-top: 2px solid white; /* Set border color and style */
    border-left: 2px solid white; /* Set border color and style */
  }

  &::before {
    content: '';
    position: absolute;
    top: 5px;
    right: 5px;
    width: 10px;
    height: 10px;
    border-top: 2px solid white; /* Set border color and style */
    border-right: 2px solid white;  

  }  

  div {
    width: 100%;
    height: 100%;


      padding: 18px 30px;

    position: relative;

    &::before {
    content: '';
    position: absolute;
    bottom: 5px;
    right: 5px;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid white; /* Set border color and style */
    border-right: 2px solid white;  
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 5px;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid white; /* Set border color and style */
    border-left: 2px solid white;  
  }

  }
`;

export const InfoBar = styled.div`

  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem 0 1rem 0.25rem;
  border-top: 1px solid ${GV('gray')};
  border-bottom: 1px solid ${GV('gray')};
`

export const VerticalBarChartLayout = styled.div`
  width: 70%;
  height: 100%;

`