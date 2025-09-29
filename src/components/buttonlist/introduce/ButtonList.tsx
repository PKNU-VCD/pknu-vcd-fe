import { Button } from '@/components/Button/Button';
import { useNavigator } from '@/hooks/useNavigator';
import { usePathname } from 'next/navigation';
import * as S from './ButtonList.styles';

export default function ButtonList() {
  const pathname = usePathname();
  const { navigateTo } = useNavigator();

  const handleButtonClick = (path: string) => {
    navigateTo(path);
  };

  return (
    <S.ButtonContainer>
      <Button
        variant="tertiary"
        label="전시 소개"
        isActive={pathname === '/introduce/introduction'}
        onClick={() => handleButtonClick('/introduce/introduction')}
      />
      <Button
        variant="tertiary"
        label="전시 상세"
        isActive={pathname === '/introduce/detail'}
        onClick={() => handleButtonClick('/introduce/detail')}
      />
      <Button
        variant="tertiary"
        label="축사"
        isActive={pathname === '/introduce/celebration'}
        onClick={() => handleButtonClick('/introduce/celebration')}
      />
    </S.ButtonContainer>
  );
}
