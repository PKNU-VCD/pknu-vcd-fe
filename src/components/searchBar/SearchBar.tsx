import SearchIcon from '@/assets/icons/search.svg';
import MobileSearchIcon from '@/assets/icons/sub/mobile/search.svg';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { theme } from '@/styles/theme';
import { useState } from 'react';
import * as S from './SearchBar.styles';

interface SearchBarProps {
  onSubmit?: () => void;
  onSearchChange?: (searchTerm: string) => void;
}

export const SearchBar = ({ onSubmit, onSearchChange }: SearchBarProps) => {
  const placeholder = '작품 혹은 디자이너 이름을 검색해 주세요';
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.mobileLarge})`);
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearchChange?.(value);
  };

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.IconWrapper>{isMobile ? <MobileSearchIcon /> : <SearchIcon />}</S.IconWrapper>
      <S.InputContainer placeholder={placeholder} value={searchValue} onChange={handleChange} />
    </S.Wrapper>
  );
};
