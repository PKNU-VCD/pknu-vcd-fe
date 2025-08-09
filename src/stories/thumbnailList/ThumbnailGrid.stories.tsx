import { ThumbnailGrid } from '@/components/thumbnailGrid/ThumbnailGrid';
import type { Meta, StoryObj } from '@storybook/nextjs';

const meta: Meta<typeof ThumbnailGrid> = {
  title: 'Components/ThumbnailList/ThumbnailGrid',
  component: ThumbnailGrid,
};

export default meta;
type Story = StoryObj<typeof ThumbnailGrid>;

const mockUrl = 'https://i.pinimg.com/1200x/69/26/1b/69261bec7bcf155e6501475eccd7dc31.jpg';

const projects = [
  {
    title: '자연 속의 균형',
    designer: '김하늘',
    imageUrl: 'https://i.pinimg.com/1200x/10/f2/79/10f2790442d741279c5bfc9795b3ebb3.jpg',
  },
  {
    title: '도시의 리듬',
    designer: '이준호',
    imageUrl: 'https://i.pinimg.com/1200x/4b/a8/27/4ba8272cae940dba0f5c382f4d7e36ca.jpg',
  },
  {
    title: '몽환적인 기억',
    designer: '박서연',
    imageUrl: mockUrl,
  },
  {
    title: '복잡한 단순함',
    designer: '최지우',
    imageUrl: 'https://i.pinimg.com/1200x/10/f2/79/10f2790442d741279c5bfc9795b3ebb3.jpg',
  },
  {
    title: '빛과 그림자',
    designer: '정민재',
    imageUrl: mockUrl,
  },
  {
    title: '공간의 재구성',
    designer: '오하늘',
    imageUrl: 'https://i.pinimg.com/1200x/4b/a8/27/4ba8272cae940dba0f5c382f4d7e36ca.jpg',
  },
  {
    title: '움직임의 미학',
    designer: '윤도윤',
    imageUrl: 'https://i.pinimg.com/736x/ee/9f/30/ee9f30919ac7c4e20eff5227acb30781.jpg',
  },
  {
    title: '미래의 전통',
    designer: '한소연',
    imageUrl: mockUrl,
  },
  {
    title: '자연과 인간',
    designer: '김수진',
    imageUrl: 'https://i.pinimg.com/1200x/4b/a8/27/4ba8272cae940dba0f5c382f4d7e36ca.jpg',
  },
  {
    title: '감정의 색',
    designer: '배지훈',
    imageUrl: 'https://i.pinimg.com/1200x/4b/a8/27/4ba8272cae940dba0f5c382f4d7e36ca.jpg',
  },
  {
    title: '순환의 구조',
    designer: '이예린',
    imageUrl: mockUrl,
  },
  {
    title: '일상의 재발견',
    designer: '조민호',
    imageUrl: 'https://i.pinimg.com/736x/ee/9f/30/ee9f30919ac7c4e20eff5227acb30781.jpg',
  },
  {
    title: '디지털 감성',
    designer: '김다영',
    imageUrl: mockUrl,
  },
  {
    title: '기억의 파편',
    designer: '최준혁',
    imageUrl: mockUrl,
  },
  {
    title: '추상의 실체',
    designer: '박지윤',
    imageUrl: 'https://i.pinimg.com/736x/ee/9f/30/ee9f30919ac7c4e20eff5227acb30781.jpg',
  },
  {
    title: '파괴와 창조',
    designer: '이재민',
    imageUrl: mockUrl,
  },
  {
    title: '숨겨진 질서',
    designer: '서유리',
    imageUrl: mockUrl,
  },
  {
    title: '감각의 충돌',
    designer: '노진우',
    imageUrl: mockUrl,
  },
  {
    title: '시간의 흐름',
    designer: '황예나',
    imageUrl: mockUrl,
  },
  {
    title: '다층적 시선',
    designer: '백승현',
    imageUrl: mockUrl,
  },
];

export const Default: Story = {
  args: {
    projects: projects,
  },
};
