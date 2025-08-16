import type { Meta, StoryObj } from '@storybook/nextjs';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const MainHeader: Story = {
  render: () => <Header headerType="main" />,
};

export const SubHeader: Story = {
  render: () => <Header headerType="sub" />,
};
