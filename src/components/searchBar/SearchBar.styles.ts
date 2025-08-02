import styled from '@emotion/styled';

export const Wrapper = styled.form`
  display: flex;
  gap: 27px;
  align-items: center;
`;

export const InputContainer = styled.input`
  flex: 1;
  border: none;
  ${({ theme }) => theme.typography.regular};
  padding: 21px 40px;
  &:focus {
    outline: none;
  }
`;
