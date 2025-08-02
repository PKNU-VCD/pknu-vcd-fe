import type { Meta, StoryObj } from '@storybook/nextjs';
import InputField from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number'],
    },
    placeholder: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
    onChange: { action: 'changed' },
    onDelete: { action: 'deleted' },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: '텍스트를 입력하세요',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: '이메일을 입력하세요',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: '비밀번호를 입력하세요',
  },
};

export const ID: Story = {
  args: {
    type: 'text',
    placeholder: '아이디를 입력하세요',
  },
};

export const DesignerName: Story = {
  args: {
    type: 'text',
    placeholder: '디자이너 이름을 입력하세요',
  },
};

export const Value: Story = {
  args: {
    type: 'text',
    placeholder: '텍스트를 입력하세요',
    value: '입력된 텍스트',
  },
};
