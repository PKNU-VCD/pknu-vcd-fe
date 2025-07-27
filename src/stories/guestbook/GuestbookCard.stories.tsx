import { GuestbookCard } from '@/components/guestbook/guestbookCard/GuestbookCard';
import type { Meta, StoryObj } from '@storybook/nextjs';

const meta: Meta<typeof GuestbookCard> = {
  title: 'Components/Guestbook/GuestbookCard',
  component: GuestbookCard,
};

export default meta;
type Story = StoryObj<typeof GuestbookCard>;

export const Default: Story = {
  args: {
    text: '방문해 주셔서 감사합니다! 😊',
  },
};

export const Variant: Story = {
  args: {
    text: '방문해 주셔서 감사합니다! 😊',
    $backgroundColor: 'yellow',
  },
};

export const LongText: Story = {
  args: {
    text: '함께해 주셔서 정말 감사합니다. 짧은 순간이지만 소중한 인연이 되어주셔서 큰 힘이 되었어요. 행복하세요! 짧은 순간이지만 소중한 인연이 되어주셔서 큰 힘이 되었어요. !!!!!!!',
    $backgroundColor: 'pink',
  },
};
