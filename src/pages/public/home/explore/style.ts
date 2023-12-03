import styled from 'styled-components';
import { GV } from '@/utils/style.util';

export const ExploreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: 100%;
`;

export const ExploreWrapper = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`