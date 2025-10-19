'use client';

import DeleteIcon from '@/assets/icons/DeleteIcon.svg';
import { useNavigator } from '@/hooks/useNavigator';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '../Button/Button';
import * as S from './Sidebar.styles';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { navigateTo } = useNavigator();
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleButtonClick = (path: string) => {
    navigateTo(path);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <S.SidebarOverlay onClick={onClose}>
      <S.SidebarContainer onClick={e => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>
          <DeleteIcon />
        </S.CloseButton>
        <S.SidebarMenu>
          <Button
            variant="primary"
            headerType="main"
            isActive={pathname.startsWith('/introduce')}
            onClick={() => handleButtonClick('/introduce/introduction')}
          >
            소개합니다.
          </Button>
          <Button
            variant="primary"
            headerType="main"
            isActive={pathname.startsWith('/exhibition')}
            onClick={() => handleButtonClick('/exhibition')}
          >
            전시합니다.
          </Button>
          <Button
            variant="primary"
            headerType="main"
            isActive={pathname.startsWith('/architect')}
            onClick={() => handleButtonClick('/architect')}
          >
            디자인합니다.
          </Button>
          <Button
            variant="primary"
            headerType="main"
            isActive={pathname.startsWith('/record')}
            onClick={() => handleButtonClick('/record')}
          >
            기록합니다.
          </Button>
        </S.SidebarMenu>
      </S.SidebarContainer>
    </S.SidebarOverlay>
  );
};

export default Sidebar;
