import { Button } from '@/components/button/Button';
import type { Meta, StoryObj } from '@storybook/nextjs';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const primary: Story = {
  args: {
    variant: 'primary',
    children: '소개 합니다.',
  },
};

export const secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'branding',
  },
};

export const tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: '전시소개',
  },
};

export const submit: Story = {
  args: {
    variant: 'submit',
    children: '로그인',
  },
};

export const submit_sub: Story = {
  args: {
    variant: 'submit_sub',
    children: '수정',
  },
};

export const exhibition: Story = {
  args: {
    variant: 'exhibition',
    children: '부경대학교 시각디자인학과 졸업전시 인스타그램',
  },
};

export const confirm: Story = {
  args: {
    variant: 'confirm',
    children: '확인',
  },
};

export const cancel: Story = {
  args: {
    variant: 'cancel',
    children: '취소',
  },
};
