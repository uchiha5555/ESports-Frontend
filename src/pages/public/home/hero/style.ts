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
`;

export const BreadcrumbWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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

export const UserInfoContainer = styled.div`
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
  right: 0;
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
  color: ${props => props.theme.button.text};
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
`

export const VerticalBarChartLayout = styled.div`
  width: 70%;
  height: 100%;

`