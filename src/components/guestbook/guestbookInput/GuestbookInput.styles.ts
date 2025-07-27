import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
`;

export const TextAreaContainer = styled.textarea`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.input};
  ${({ theme }) => theme.typography.regular};
  border-radius: 20px;
  padding: 30px 30px 60px 30px;
`;

export const TextLengthContainer = styled.div<{ $isOverLimit: boolean }>`
  //TODO: 컬러 시스템 정리 이후 수정 필요
  color: ${({ theme, $isOverLimit }) => ($isOverLimit ? '#FF33AA' : theme.colors.input)};
  ${({ theme, $isOverLimit }) =>
    $isOverLimit ? theme.typography.extraBold : theme.typography.regular};
  position: absolute;
  bottom: 12px;
  right: 30px;
`;

export const ButtonContainer = styled.button`
  border-radius: 1000px;
  border: 1px solid #F2F2F2;
  display: inline-flex;
  padding: 10px;
`;
