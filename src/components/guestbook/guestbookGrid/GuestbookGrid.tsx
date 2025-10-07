import { useMediaQuery } from '@/hooks/useMediaQuery';
import { theme } from '@/styles/theme';
import { getRandomThemeColor } from '@/utils/randomColor';
import { GuestbookCard } from '../guestbookCard/GuestbookCard';
import * as S from './GuestbookGrid.styles';

interface GuestbookGridProps {
  /** 코멘트 리스트 */
  comments: string[];
}

export const GuestbookGrid = ({ comments }: GuestbookGridProps) => {
  const guestbookColors = ['green', 'pink', 'yellow'] as const;

  const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.tablet})`);
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.mobileLarge})`);

  const getDisplayComments = () => {
    if (isMobile && comments.length > 3) {
      const shuffled = [...comments].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 3);
    }
    if (isTablet && comments.length > 4) {
      const shuffled = [...comments].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 4);
    }

    return comments;
  };

  const displayComments = getDisplayComments();

  return (
    <S.Wrapper>
      {displayComments.map((comment, index) => (
        <GuestbookCard
          text={comment}
          key={index}
          $backgroundColor={getRandomThemeColor(guestbookColors)}
        />
      ))}
    </S.Wrapper>
  );
};
