import InputUpload from '@/assets/icons/InputUpload.svg';
import { useState } from 'react';
import * as S from './GuestbookInput.styles';

interface GuestbookInputProps {
  /** 최대 입력 글자수 */
  maxLength?: number;
  /** 제출 시 호출 함수 */
  onSubmit: () => void;
}
export const GuestbookInput = ({ maxLength = 100, onSubmit }: GuestbookInputProps) => {
  const [text, setText] = useState('');
  const isOverLimit = text.length >= maxLength;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.target.value;
    if (input.length > maxLength) {
      setText(input.slice(0, maxLength));
    } else {
      setText(input);
    }
  };

  return (
    <S.Wrapper>
      <S.TextAreaContainer
        value={text}
        onChange={handleChange}
        placeholder="누구를 축하하고 누가 축하하고 있는지 함께 작성해주세요."
        maxLength={maxLength}
        autoComplete="off"
        autoCorrect="off"
        $isOverLimit={isOverLimit}
      />
      <S.TextLengthContainer
        $isOverLimit={isOverLimit}
      >{`${text.length}/100`}</S.TextLengthContainer>
      <S.ButtonContainer onClick={onSubmit}>
        <InputUpload />
      </S.ButtonContainer>
    </S.Wrapper>
  );
};
