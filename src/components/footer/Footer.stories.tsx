import type { Meta, StoryObj } from '@storybook/nextjs';
import Footer from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const main: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  render: () => <Footer footerType="main" />,
};

export const sub: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  render: () => <Footer footerType="sub" />,
};
