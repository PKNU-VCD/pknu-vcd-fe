import Footer from '@/components/footer/Footer';
import type { Meta, StoryObj } from '@storybook/nextjs';

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

export const Main: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  render: () => <Footer footerType="main" />,
};

export const Sub: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  render: () => <Footer footerType="sub" />,
};
