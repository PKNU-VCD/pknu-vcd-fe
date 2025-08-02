import type { Meta, StoryObj } from '@storybook/nextjs';
import Footer from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const 데스크탑: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
      viewports: {
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1920Px',
            height: '100px',
          },
        },
      },
    },
  },
  render: () => <Footer />,
};

export const 태블릿: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
      viewports: {
        tablet: {
          name: 'Tablet',
          styles: {
            width: '860px',
            height: '100px',
          },
        },
      },
    },
  },
  render: () => <Footer />,
};

export const 모바일: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '100px',
          },
        },
      },
    },
  },
  render: () => <Footer />,
};
