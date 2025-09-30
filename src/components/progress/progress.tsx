import { formatTime } from '@/utils/formatTime';
import * as S from './progress.styles';

interface TimeMarker {
  time: number;
  color?: string; // 수직선 색상
  labelColor?: string; // 시간 라벨 색상
}

interface ProgressProps {
  startTime?: number;
  endTime?: number;
  maxTime?: number;
  timeMarkers?: TimeMarker[];
  backgroundColor?: string;
  filledColor?: string;
  borderColor?: string;
  filledBorderColor?: string;
}

const Progress = ({
  startTime = 10,
  endTime = 20,
  maxTime = 24,
  timeMarkers = [],
  backgroundColor = '#ffff85',
  filledColor = '#ff74ff',
  borderColor = '#ff74ff',
  filledBorderColor = '#ff74ff',
}: ProgressProps) => {
  const startPercent = (startTime / maxTime) * 100;
  const endPercent = (endTime / maxTime) * 100;

  return (
    <S.ProgressContainer>
      <S.ProgressBar backgroundColor={backgroundColor} borderColor={borderColor}>
        <S.FilledProgress
          startPercent={startPercent}
          endPercent={endPercent}
          filledColor={filledColor}
          filledBorderColor={filledBorderColor}
        />
        {timeMarkers.map((marker, index) => (
          <S.VerticalLine
            key={index}
            position={(marker.time / maxTime) * 100}
            color={marker.color}
          />
        ))}
      </S.ProgressBar>
      {timeMarkers.map((marker, index) => (
        <S.TimeLabel
          key={`label-${index}`}
          position={(marker.time / maxTime) * 100}
          color={marker.labelColor}
        >
          {formatTime(marker.time)}
        </S.TimeLabel>
      ))}
    </S.ProgressContainer>
  );
};

export default Progress;
