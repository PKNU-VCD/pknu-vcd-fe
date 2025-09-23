import { TranslationPanel } from '@/components/translationPanel/TranslationPanel';
import type { Meta, StoryObj } from '@storybook/nextjs';

const meta: Meta<typeof TranslationPanel> = {
  title: 'Components/TranslationPanel',
  component: TranslationPanel,
};

export default meta;
type Story = StoryObj<typeof TranslationPanel>;

export const Default: Story = {
  args: {
    text: '\"_합니다.\" is an unfinished sentence\nIt holds space for words like “graduate,” “challenge,” or “design” — a place where each of us can freely write our own beginning and direction.\nAs designers, we are still in the process of completing that sentence, one step at a time.\nThis exhibition was created to capture a moment where our dreams and potential come together in a single, visual expression.\nThe vibrant trajectories radiating from the center of the poster symbolize the time, thoughts, and energy we\'ve accumulated through learning design —\nnow bursting outward as a powerful force of possibility.\nThe irregular, colorful lines represent our unique journeys and identities. At the same time, they point to infinite directions in which our creativity can grow and expand.\nThis exhibition is a visual unfolding of potential in motion —\na vivid explosion born from the convergence of colors and lines that each began from a different place, yet came together in one striking moment.',
  },
};

export const ColorCustom: Story = {
  args: {
    text: '\"_합니다.\" is an unfinished sentence\nIt holds space for words like “graduate,” “challenge,” or “design” — a place where each of us can freely write our own beginning and direction.\nAs designers, we are still in the process of completing that sentence, one step at a time.\nThis exhibition was created to capture a moment where our dreams and potential come together in a single, visual expression.\nThe vibrant trajectories radiating from the center of the poster symbolize the time, thoughts, and energy we\'ve accumulated through learning design —\nnow bursting outward as a powerful force of possibility.\nThe irregular, colorful lines represent our unique journeys and identities. At the same time, they point to infinite directions in which our creativity can grow and expand.\nThis exhibition is a visual unfolding of potential in motion —\na vivid explosion born from the convergence of colors and lines that each began from a different place, yet came together in one striking moment.',
    buttonColor: 'lightGreen',
  },
};
