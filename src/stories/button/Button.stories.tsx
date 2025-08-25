import { Button } from '@/components/Button/Button';
import type { Meta, StoryObj } from '@storybook/nextjs';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: '소개 합니다.',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'branding',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: '전시소개',
  },
};

export const Submit: Story = {
  args: {
    variant: 'submit',
    children: '로그인',
  },
};

export const Submit_sub: Story = {
  args: {
    variant: 'submit_sub',
    children: '수정',
  },
};

export const Exhibition: Story = {
  args: {
    variant: 'exhibition',
    children: '부경대학교 시각디자인학과 졸업전시 인스타그램',
  },
};

export const Confirm: Story = {
  args: {
    variant: 'confirm',
    children: '확인',
  },
};

export const Cancel: Story = {
  args: {
    variant: 'cancel',
    children: '취소',
  },
};
