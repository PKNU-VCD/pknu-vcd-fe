import { GuestbookInput } from '@/components/guestbook/guestbookInput/GuestbookInput';
import type { Meta, StoryObj } from '@storybook/nextjs';

const meta: Meta<typeof GuestbookInput> = {
  title: 'Components/Guestbook/GuestbookInput',
  component: GuestbookInput,
};

export default meta;
type Story = StoryObj<typeof GuestbookInput>;

export const Default: Story = {
  args: {
    onSubmit: () => {},
  },
};
