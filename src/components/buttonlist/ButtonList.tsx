import { useNavigator } from '@/hooks/useNavigator';
import { Button } from '../Button/Button';
import * as S from './ButtonList.styles';

export default function ButtonList() {
  const { navigateTo } = useNavigator();

  const handleButtonClick = (path: string) => {
    navigateTo(path);
  };

  return (
    <S.ButtonContainer>
      <Button
        variant="tertiary"
        label="전시 소개"
        onClick={() => handleButtonClick('/introduce/introduction')}
      />
      <Button
        variant="tertiary"
        label="전시 상세"
        onClick={() => handleButtonClick('/introduce/detail')}
      />
      <Button
        variant="tertiary"
        label="축사"
        onClick={() => handleButtonClick('/introduce/celebration')}
      />
    </S.ButtonContainer>
  );
}
