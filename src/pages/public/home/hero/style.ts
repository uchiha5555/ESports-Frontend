import styled, { keyframes } from 'styled-components';
import { GV } from '@/utils/style.util';
import { Span } from '@/components/basic';

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
  max-width: 1471px;
  width: 100%;

  @media (max-width: 1600px) {
    padding-left: 20px;
  }
`;

export const BreadcrumbWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileBreadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${GV('font1')};
  font-size: 0.875rem;
  color: ${props => props.theme.text};
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`

export const Breadcrumb = styled.div`
  font-family: ${GV('font2')};
  font-size: ${GV('font-size')};
  font-weight: 400;
  margin-top: 10px;
`;

export const Unactived = styled(Span)`
  color: ${props => props.theme.breadcrumb.primary};
`;

export const Actived = styled(Span)`
  color: ${props => props.theme.breadcrumb.secondary};
`


export const PlayerLetter = styled.div`
  color: ${props => props.theme.button.text};
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

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 1320px) {
    display: none;
  }
`

export const UserInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1;
  @media (max-width: 1320px) {
    display: flex;
    flex-direction: column;
    height: 600px;
    padding: 0 0 2rem;
  }
`

export const UserInfo = styled.div`
  display: flex;
  gap: 4rem;
  margin-top: -1.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
    padding: 0;
  }

  @media (max-width: 400px) {
    gap: 3rem;
  }
`;

export const AvatarContainer = styled.div`
  max-width: 430px;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    width: 250px;
  }

  @media (max-width: 650px) {
    width: 180px;
  }

  @media (max-width: 550px) {
    width: 120px;
  }
`;

export const BackAvatarContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: 0.1;
  z-index: -1;
  width: auto;

  @media (max-width: 768px) {
    bottom: 5rem;
  }

  @media (max-width: 600px) {
    height: 600px;
    bottom: 10rem;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1.5rem;
  padding-top: 1.5rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const CustomName = styled.div`
  font-size: 50px;
  font-family: ${GV('font2')};
  letter-spacing: -1.5px;
  text-transform: uppercase;
  font-weight: 500;
  color: ${props => props.theme.button.text};

  @media (max-width: 768px) {
    font-size: 25px;
    font-weight: 900;
  }

  @media (max-width: 600px) {
    font-size: 18px;
    font-weight: 900;
  }
`;

export const LinkLetter = styled.div`
  font-size: ${GV('font-size-5')};
  font-family: ${GV('font1')};
  text-decoration-line: underline;
  text-transform: uppercase;
  color: ${props => props.theme.button.text};
`;

export const CustomButton = styled.button`
  position: relative;

  font-size: ${GV('font-size-5')};
  font-family: ${GV('font1')};
  text-transform: uppercase;
  border: 1px solid ${props => props.theme.button.border};
  color: ${props => props.theme.button.text};
  
  /* Apply border to each corner */
  &::after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 10px;
    height: 10px;
    border-top: 2px solid ${props => props.theme.button.border}; /* Set border color and style */
    border-left: 2px solid ${props => props.theme.button.border}; /* Set border color and style */
  }

  &::before {
    content: '';
    position: absolute;
    top: 5px;
    right: 5px;
    width: 10px;
    height: 10px;
    border-top: 2px solid ${props => props.theme.button.border}; /* Set border color and style */
    border-right: 2px solid ${props => props.theme.button.border};  

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
    border-bottom: 2px solid ${props => props.theme.button.border}; /* Set border color and style */
    border-right: 2px solid ${props => props.theme.button.border};  
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 5px;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid ${props => props.theme.button.border}; /* Set border color and style */
    border-left: 2px solid ${props => props.theme.button.border};  
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
  color: ${props => props.theme.button.text};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileInfoBar = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MobileInfoItem = styled.div`
  padding: 0.75rem 0;
  color: ${props => props.theme.text};
  font-family: ${GV('font1')};
  border-top: 1px solid ${props => props.theme.table.main};
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

export const VerticalBarChartLayout = styled.div`
  width: 70%;
  height: 100%;

  @media (max-width: 1320px) {
    display: none;
  }
`;

export const MobileVerticalBarChartLayout = styled.div`
  width: 100%;
  height: 100%;
  display: none;

  @media (max-width: 1320px) {
    display: inline-block;
    width: 100%;
    height: 100%;

    margin: 20px 0px;

    margin-left: -65px;
  }
`

export const MobileButtonContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 2rem;
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`