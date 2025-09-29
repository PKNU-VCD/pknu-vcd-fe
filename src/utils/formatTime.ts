export const formatTime = (hour: number): string => {
  let displayHour: number;

  // 12시간 근처에서는 floor 사용
  if (hour >= 12.0 && hour <= 12.9) {
    displayHour = Math.floor(hour);
  } else {
    displayHour = Math.round(hour);
  }

  if (displayHour === 0 || displayHour === 24) return '12AM';
  if (displayHour < 12) return `${displayHour}AM`;
  if (displayHour === 12) return '12PM';
  return `${displayHour - 12}PM`;
};
