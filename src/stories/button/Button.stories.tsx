import FileUploadIcon from '@/assets/icons/FileUploadIcon.svg';
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

export const login: Story = {
  args: {
    variant: 'login',
    children: '로그인',
  },
};

export const addFile: Story = {
  args: {
    variant: 'addFile',
    children: (
      <>
        <FileUploadIcon />
        <span>업로드 파일추가</span>
      </>
    ),
  },
};

export const upload: Story = {
  args: {
    variant: 'upload',
    children: '업로드',
  },
};
