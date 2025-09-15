import { Button } from '@/components/Button/Button';
import * as S from './ButtonList.styles';

export default function ButtonList() {
  return (
    <S.ButtonContainer>
      <Button variant="secondary" label="Branding" />
      <Button variant="secondary" label="Package" />
      <Button variant="secondary" label="Graphic" />
      <Button variant="secondary" label="illustration" />
      <Button variant="secondary" label="UI/UX" />
      <Button variant="secondary" label="Editorial" />
    </S.ButtonContainer>
  );
}
