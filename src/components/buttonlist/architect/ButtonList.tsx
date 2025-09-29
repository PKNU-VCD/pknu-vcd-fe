import { Button } from '@/components/Button/Button';
import { useNavigator } from '@/hooks/useNavigator';
import { useState } from 'react';
import * as S from './ButtonList.styles';

export default function ButtonList() {
  const { navigateTo } = useNavigator();
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);

  const handleButtonClick = (label: string, path: string) => {
    setSelectedButtons(prev =>
      prev.includes(label) ? prev.filter(item => item !== label) : [...prev, label],
    );
    navigateTo(path);
  };

  return (
    <S.ButtonContainer>
      <Button
        variant="secondary"
        label="Branding"
        onClick={() => handleButtonClick('Branding', '/architect/branding')}
        isActive={selectedButtons.includes('Branding')}
      />
      <Button
        variant="secondary"
        label="Package"
        onClick={() => handleButtonClick('Package', '/architect/package')}
        isActive={selectedButtons.includes('Package')}
      />
      <Button
        variant="secondary"
        label="Graphic"
        onClick={() => handleButtonClick('Graphic', '/architect/graphic')}
        isActive={selectedButtons.includes('Graphic')}
      />
      <Button
        variant="secondary"
        label="illustration"
        onClick={() => handleButtonClick('illustration', '/architect/illustration')}
        isActive={selectedButtons.includes('illustration')}
      />
      <Button
        variant="secondary"
        label="UI/UX"
        onClick={() => handleButtonClick('UI/UX', '/architect/ui-ux')}
        isActive={selectedButtons.includes('UI/UX')}
      />
      <Button
        variant="secondary"
        label="Editorial"
        onClick={() => handleButtonClick('Editorial', '/architect/editorial')}
        isActive={selectedButtons.includes('Editorial')}
      />
    </S.ButtonContainer>
  );
}
