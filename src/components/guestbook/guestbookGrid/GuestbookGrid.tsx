import { getRandomThemeColor } from "@/utils/randomColor";
import GuestbookCard from "../guestbookCard/GuestbookCard";
import * as S from "./GuestbookGrid.styles";

interface GuestbookGridProps {
    /** 코멘트 리스트 */
    comments: string[];
}

export const GuestbookGrid = ({comments}: GuestbookGridProps) => {
    const guestbookColors = ['green', 'pink', 'yellow'] as const;

    return (
        <S.Wrapper>
            {comments.map((comment, index) => (
                <GuestbookCard text={comment} key={index} $backgroundColor={getRandomThemeColor(guestbookColors)}/>
            ))}
        </S.Wrapper>
    )
}