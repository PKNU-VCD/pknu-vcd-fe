import { Thumbnail } from '@/components/thumbnailGrid/thumbnail/Thumbnail';
import type { Meta, StoryObj } from '@storybook/nextjs';

const meta: Meta<typeof Thumbnail> = {
  title: 'Components/ThumbnailList/Thumbnail',
  component: Thumbnail,
};

export default meta;
type Story = StoryObj<typeof Thumbnail>;

export const Default: Story = {
  args: {
    title: '프로젝트 제목',
    designer: '디자이너 이름',
    imageUrl: 'https://i.pinimg.com/1200x/69/26/1b/69261bec7bcf155e6501475eccd7dc31.jpg',
    onClick: () => {},
  },
};

export const Blurred: Story = {
  args: {
    title: '프로젝트 제목',
    designer: '디자이너 이름',
    imageUrl: 'https://i.pinimg.com/1200x/69/26/1b/69261bec7bcf155e6501475eccd7dc31.jpg',
    onClick: () => {},
    isBlurred: true,
  },
};
