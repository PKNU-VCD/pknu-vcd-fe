import type { Meta, StoryObj } from '@storybook/nextjs';
import HomePage from '../app/main/page';

const meta: Meta<typeof HomePage> = {
  title: 'Pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof HomePage>;

export const Default: Story = {};
