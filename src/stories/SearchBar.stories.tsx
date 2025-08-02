import { SearchBar } from '@/components/searchBar/SearchBar';
import type { Meta, StoryObj } from '@storybook/nextjs';

const meta: Meta<typeof SearchBar> = {
  title: 'Components/SearchBar',
  component: SearchBar,
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {},
};
