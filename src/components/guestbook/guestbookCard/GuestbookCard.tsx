import { Theme } from '@emotion/react';
import * as S from './GuestbookCard.styles';

interface GuestbookCardProps {
    /** 작성한 방명록 텍스트 */
    text: string;
    /** 배경 색상 */
    $backgroundColor?: keyof Theme['colors']['guestbook'];
}
const GuestbookCard = ({text, $backgroundColor = "green"} : GuestbookCardProps) => {
    return (
        <S.Wrapper $backgroundColor={$backgroundColor}>
            {text}
        </S.Wrapper>
    );
}

export default GuestbookCard;