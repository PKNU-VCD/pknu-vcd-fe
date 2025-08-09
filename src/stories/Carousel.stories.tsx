import { Carousel } from '@/components/carousel/Carousel';
import { Slide } from '@/types/slide.type';
import type { Meta, StoryObj } from '@storybook/nextjs';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const mockSlides: Slide[] = [
  {
    type: 'image',
    url: 'https://i.pinimg.com/1200x/17/46/44/174644133c847070b82422e6078e3ee5.jpg',
  },
  {
    type: 'image',
    url: 'https://i.pinimg.com/1200x/02/a4/e0/02a4e08f327dcc7b7834f9d6e24420ba.jpg',
  },
  {
    type: 'image',
    url: 'https://i.pinimg.com/1200x/c1/56/d2/c156d2f0330ac8da3ef2edbe750cc186.jpg',
  },
  {
    type: 'image',
    url: 'https://i.pinimg.com/1200x/15/2f/0e/152f0ef26def17c842167ebd61dfc1a8.jpg',
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/ToUvNWlfAu0?si=s1vLFEEhAinOk2tx&amp;start=2684',
  },
];

export const Default: Story = {
  args: {
    slides: mockSlides,
  },
};
