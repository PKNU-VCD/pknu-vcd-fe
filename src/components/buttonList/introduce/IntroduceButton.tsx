import { Button } from '@/components/Button/Button';
import { usePathname, useRouter } from 'next/navigation';
import * as S from './IntroduceButton.styles';

export default function ButtonList() {
  const router = useRouter();
  const pathname = usePathname();

  const handleButtonClick = (path: string) => {
    router.push(path);
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
