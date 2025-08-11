import SearchIcon from '@/assets/icons/search.svg';
import * as S from './SearchBar.styles';

interface SearchBarProps {
  /** 검색바 제출 핸들러 */
  onSubmit?: () => void;
}

export const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const placeholder = '작품 혹은 디자이너 이름을 검색해 주세요';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.();
  };

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <SearchIcon />
      <S.InputContainer placeholder={placeholder} />
    </S.Wrapper>
  );
};
