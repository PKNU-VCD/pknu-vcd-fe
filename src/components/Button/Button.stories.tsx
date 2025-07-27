import type { Meta, StoryObj } from '@storybook/nextjs';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const 전시소개: Story = {
  args: {
    variant: 'exhibition',
    children: '전시 소개',
  },
};

export const 로그인: Story = {
  args: {
    variant: 'login',
    children: '로그인',
  },
};

export const 헤더버튼: Story = {
  args: {
    variant: 'header',
    children: '소개 합니다.',
  },
};