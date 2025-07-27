import { GuestbookGrid } from '@/components/guestbook/guestbookGrid/guestbookGrid';
import type { Meta, StoryObj } from '@storybook/nextjs';

const meta: Meta<typeof GuestbookGrid> = {
  title: 'Components/Guestbook/GuestbookGrid',
  component: GuestbookGrid,
};

export default meta;
type Story = StoryObj<typeof GuestbookGrid>;

const mockComments = [
  '방문해 주셔서 감사합니다! 😊',
  '방명록 그리드 테스트',
  '이곳은 방명록입니다. 자유롭게 남겨주세요!',
  '여러분의 소중한 방문을 기다립니다!',
  '졸업 축하합니다~!'
]

export const Default: Story = {
  args: {
    comments: mockComments,
  },
};