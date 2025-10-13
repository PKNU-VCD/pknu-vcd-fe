import { Button } from '@/components/Button/Button';
import { useState } from 'react';
import * as S from './ArchitectButton.styles';

interface ArchitectButtonProps {
  onCategoryChange?: (categories: string[]) => void;
}

export default function ArchitectButton({ onCategoryChange }: ArchitectButtonProps) {
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);

  const handleButtonClick = (label: string) => {
    const newSelection = selectedButtons.includes(label)
      ? selectedButtons.filter(item => item !== label)
      : [...selectedButtons, label];

    setSelectedButtons(newSelection);
    onCategoryChange?.(newSelection);
  };

  return (
    <S.ButtonContainer>
      <Button
        variant="secondary"
        label="Branding"
        onClick={() => handleButtonClick('Branding')}
        isActive={selectedButtons.includes('Branding')}
      />
      <Button
        variant="secondary"
        label="Package"
        onClick={() => handleButtonClick('Package')}
        isActive={selectedButtons.includes('Package')}
      />
      <Button
        variant="secondary"
        label="Graphic"
        onClick={() => handleButtonClick('Graphic')}
        isActive={selectedButtons.includes('Graphic')}
      />
      <Button
        variant="secondary"
        label="illustration"
        onClick={() => handleButtonClick('illustration')}
        isActive={selectedButtons.includes('illustration')}
      />
      <Button
        variant="secondary"
        label="UI/UX"
        onClick={() => handleButtonClick('UI/UX')}
        isActive={selectedButtons.includes('UI/UX')}
      />
      <Button
        variant="secondary"
        label="Editorial"
        onClick={() => handleButtonClick('Editorial')}
        isActive={selectedButtons.includes('Editorial')}
      />
    </S.ButtonContainer>
  );
}
