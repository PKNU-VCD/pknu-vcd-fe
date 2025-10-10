import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
`;

export const FileInput = styled.input`
  display: none;
`;

export const Label = styled.label`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.2s ease;
  overflow: hidden;

  &:hover {
    border-color: ${({ theme }) => theme.colors.blue};
  }
`;

export const UploadedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UploadedVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PlusIcon = styled.div`
  font-size: 32px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.gray};
  user-select: none;
`;

export const NumberBadge = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.typography.regular}
  color: ${({ theme }) => theme.colors.gray};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  z-index: 1;
`;
