'use client';

import { useAuth } from '@/apis/useAuth';
import { Button } from '@/components/Button/Button';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import InputField from '@/components/inputField/InputField';
import { SimpleUploadBox } from '@/components/simpleUploadBox/SimpleUploadBox';
import { UploadBox } from '@/components/uploadBox/UploadBox';
import { CATEGORIES } from '@/constants/categories';
import { useDragAndDrop } from '@/hooks/useDragAndDrop';
import { useNavigator } from '@/hooks/useNavigator';
import { useProjectForm } from '@/hooks/useProjectForm';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import * as S from './page.styles';

function UpdatePageContent() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get('id');
  const { me, isInitialized } = useAuth();
  const { navigateTo } = useNavigator();

  const { status, values, setters, media, actions } = useProjectForm(projectId);

  const { draggedIndex, handleDragStart, handleDragOver, handleDragEnd } = useDragAndDrop();

  useEffect(() => {
    if (isInitialized && !me) {
      alert('로그인이 필요합니다.');
      navigateTo('/admin');
    }
  }, [isInitialized, me, navigateTo]);

  const handleCategorySelect = (selectedCategory: string) => {
    setters.setCategory(prevCategories => {
      if (prevCategories.includes(selectedCategory)) {
        return prevCategories.filter(cat => cat !== selectedCategory);
      } else {
        return [...prevCategories, selectedCategory];
      }
    });
  };

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.SectionContainer>
          <S.TextContainer variant="title">디자인 프로젝트 카테고리</S.TextContainer>
          <S.CategoryContainer>
            {CATEGORIES.map(cat => (
              <Button
                key={cat}
                label={cat}
                variant={values.category.includes(cat) ? 'confirm' : 'primary'}
                onClick={() => handleCategorySelect(cat)}
              />
            ))}
          </S.CategoryContainer>
        </S.SectionContainer>
        <S.ResponsiveRowContainer>
          <S.SectionContainer>
            <S.RowTitleContainer>
              <S.TextContainer variant="title">프로젝트 국문 명</S.TextContainer>
              <S.TextContainer variant="option">* 필수 입력</S.TextContainer>
            </S.RowTitleContainer>
            <InputField
              placeholder="프로젝트 이름을 입력하세요."
              value={values.projectKr}
              onChange={setters.setProjectKr}
            />
          </S.SectionContainer>
          <S.SectionContainer>
            <S.TextContainer variant="title">프로젝트 영문 명</S.TextContainer>
            <InputField
              placeholder="프로젝트 이름을 입력하세요."
              value={values.projectEn}
              onChange={setters.setProjectEn}
            />
          </S.SectionContainer>
        </S.ResponsiveRowContainer>
        <S.ResponsiveRowContainer>
          <S.SectionContainer>
            <S.RowTitleContainer>
              <S.TextContainer variant="title">디자이너 국문 명</S.TextContainer>
              <S.TextContainer variant="option">* 필수 입력</S.TextContainer>
            </S.RowTitleContainer>
            <InputField
              placeholder="디자이너 이름을 입력하세요."
              value={values.designerKr}
              onChange={setters.setDesignerKr}
            />
          </S.SectionContainer>
          <S.SectionContainer>
            <S.RowTitleContainer>
              <S.TextContainer variant="title">디자이너 영문 명</S.TextContainer>
              <S.TextContainer variant="option">* 필수 입력</S.TextContainer>
            </S.RowTitleContainer>
            <InputField
              placeholder="디자이너 이름을 입력하세요."
              value={values.designerEn}
              onChange={setters.setDesignerEn}
            />
          </S.SectionContainer>
        </S.ResponsiveRowContainer>
        <S.ResponsiveRowContainer>
          <S.SectionContainer>
            <S.RowTitleContainer>
              <S.TextContainer variant="title">디자이너 이메일</S.TextContainer>
              <S.TextContainer variant="option">* 필수 입력</S.TextContainer>
            </S.RowTitleContainer>
            <InputField
              placeholder="디자이너 이메일을 입력하세요."
              value={values.email}
              onChange={setters.setEmail}
            />
          </S.SectionContainer>
        </S.ResponsiveRowContainer>
        <S.SectionContainer>
          <S.TextContainer variant="title">디자인 프로젝트 이미지</S.TextContainer>
          <S.TextContainer variant="description">썸네일 이미지</S.TextContainer>
          <S.ThumbnailUploadContainer>
            <UploadBox
              isThumbnail={true}
              onFileUpload={media.handleThumbnailUpload}
              uploadedImage={media.thumbnailPreview}
            />
          </S.ThumbnailUploadContainer>
          <S.TextContainer variant="description">드래그하여 순서를 변경하세요.</S.TextContainer>
          <S.ImageSectionContainer>
            <S.ImageGridContainer>
              {media.images.map((_, index) => (
                <S.ImageUploadItem key={index}>
                  <SimpleUploadBox
                    index={index}
                    uploadedImage={media.imagePreviews[index]}
                    onFileUpload={media.handleSingleImageUpload}
                    onRemove={media.removeImage}
                    onDragStart={handleDragStart}
                    onDragOver={handleDragOver}
                    onDragEnd={() => handleDragEnd(media.moveImage)}
                    isDragging={draggedIndex === index}
                  />
                </S.ImageUploadItem>
              ))}
            </S.ImageGridContainer>
            <S.AdditionalUploadContainer>
              <UploadBox
                description="(최대 10장)"
                onFileUpload={media.handleAdditionalImagesUpload}
              />
            </S.AdditionalUploadContainer>
          </S.ImageSectionContainer>
        </S.SectionContainer>
        <S.SectionContainer>
          <S.RowTitleContainer>
            <S.TextContainer variant="title">프로젝트 국문 설명</S.TextContainer>
            <S.TextContainer variant="option">* 필수 입력</S.TextContainer>
          </S.RowTitleContainer>
          <InputField
            placeholder="프로젝트 설명을 입력하세요."
            multiline
            value={values.descriptionKr}
            onChange={setters.setDescriptionKr}
          />
        </S.SectionContainer>
        <S.SectionContainer>
          <S.TextContainer variant="title">프로젝트 영문 설명</S.TextContainer>
          <InputField
            placeholder="프로젝트 설명을 입력하세요."
            multiline
            value={values.descriptionEn}
            onChange={setters.setDescriptionEn}
          />
        </S.SectionContainer>

        <S.ButtonContainer>
          <Button variant="cancel" label="취소" onClick={actions.handleCancel} />
          <Button
            variant="confirm"
            label={status.loading ? '처리중...' : status.isEditMode ? '수정' : '완료'}
            onClick={actions.handleSubmit}
            disabled={!actions.isFormValid() || status.loading}
          />
        </S.ButtonContainer>
      </S.Wrapper>
      <Footer footerType="sub" />
    </>
  );
}

export default function UpdatePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdatePageContent />
    </Suspense>
  );
}
