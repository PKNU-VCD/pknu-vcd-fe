import { theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 28px;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    flex-direction: column;

    button {
      width: 100%;
      min-width: 85vw;
    }
  }
`;
