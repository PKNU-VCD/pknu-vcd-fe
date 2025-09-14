'use client';

import { Button } from '@/components/Button/Button';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import InputField from '@/components/inputField/InputField';
import { SimpleUploadBox } from '@/components/simpleUploadBox/SimpleUploadBox';
import { UploadBox } from '@/components/uploadBox/UploadBox';
import { CATEGORIES } from '@/constants/categories';
import { useDragAndDrop } from '@/hooks/useDragAndDrop';
import { useProjectForm } from '@/hooks/useProjectForm';
import { useSearchParams } from 'next/navigation';
import * as S from './page.styles';

export default function UpdatePage() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get('id');

  const { status, values, setters, media, actions } = useProjectForm(projectId);

  const { draggedIndex, handleDragStart, handleDragOver, handleDragEnd } = useDragAndDrop();

  const handleCategorySelect = (selectedCategory: string) => {
    setters.setCategory(selectedCategory);
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
                variant={values.category === cat ? 'confirm' : 'primary'}
                onClick={() => handleCategorySelect(cat)}
              />
            ))}
          </S.CategoryContainer>
        </S.SectionContainer>
        <S.ResponsiveRowContainer>
          <S.SectionContainer>
            <S.RowTitleContainer>
              <S.TextContainer variant="title">프로젝트 국문명</S.TextContainer>
              <S.TextContainer variant="option">* 필수 입력</S.TextContainer>
            </S.RowTitleContainer>
            <InputField
              placeholder="프로젝트 이름을 입력하세요."
              value={values.projectKr}
              onChange={setters.setProjectKr}
            />
          </S.SectionContainer>
          <S.SectionContainer>
            <S.TextContainer variant="title">프로젝트 영문명</S.TextContainer>
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
              <S.TextContainer variant="title">디자이너 국문명</S.TextContainer>
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
          <S.RowTitleContainer>
            <S.TextContainer variant="title">디자이너 영문명</S.TextContainer>
            <S.TextContainer variant="option">* 필수 입력</S.TextContainer>
          </S.RowTitleContainer>
          <InputField
            placeholder="디자이너 이름을 입력하세요."
            value={values.designerEn}
            onChange={setters.setDesignerEn}
          />
        </S.SectionContainer>
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
                    onDragStart={handleDragStart}
                    onDragOver={handleDragOver}
                    onDragEnd={() => handleDragEnd(media.moveImage)}
                    isDragging={draggedIndex === index}
                  />
                </S.ImageUploadItem>
              ))}
            </S.ImageGridContainer>
            <S.AdditionalUploadContainer>
              <UploadBox description="(최대 10장)" onFileUpload={media.handleAdditionalImagesUpload} />
            </S.AdditionalUploadContainer>
          </S.ImageSectionContainer>
        </S.SectionContainer>
        <S.SectionContainer>
          <S.RowTitleContainer>
            <S.TextContainer variant="title">프로젝트 국문설명</S.TextContainer>
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
          <S.TextContainer variant="title">프로젝트 영문설명</S.TextContainer>
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
