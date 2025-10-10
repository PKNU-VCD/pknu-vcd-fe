import { createProject, fetchProject, updateProject } from '@/apis/project';
import { REVERSE_CATEGORY_MAP } from '@/constants/categories';
import { useImageManagement } from '@/hooks/useImageManagement';
import { useNavigator } from '@/hooks/useNavigator';
import { ProjectApiResponse } from '@/types/api';
import { prepareProjectPayload } from '@/utils/prepareProjectPayload';
import { validateProjectForm } from '@/utils/validation';
import { useEffect, useState } from 'react';

export function useProjectForm(projectId?: string | null) {
  const { navigateTo } = useNavigator();
  const isEditMode = !!projectId;

  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState<string[]>([]);
  const [projectKr, setProjectKr] = useState('');
  const [projectEn, setProjectEn] = useState('');
  const [designerKr, setDesignerKr] = useState('');
  const [designerEn, setDesignerEn] = useState('');
  const [email, setEmail] = useState('');
  const [descriptionKr, setDescriptionKr] = useState('');
  const [descriptionEn, setDescriptionEn] = useState('');

  const {
    thumbnail,
    thumbnailPreview,
    setThumbnailPreview,
    images,
    imagePreviews,
    handleThumbnailUpload,
    handleAdditionalImagesUpload,
    handleSingleImageUpload,
    moveImage,
    setImagePreviewsFromUrls,
  } = useImageManagement();

  // 기존 프로젝트 데이터 불러오기
  useEffect(() => {
    if (!isEditMode || !projectId) return;

    const loadProject = async () => {
      try {
        setLoading(true);
        const response = await fetchProject(projectId);
        const project = response.data as unknown as ProjectApiResponse;

        const newCategory = project.categories?.map(cat => REVERSE_CATEGORY_MAP[cat]).filter(Boolean) || [];
        const newProjectKr = project.projectName?.kr || '';
        const newProjectEn = project.projectName?.en || '';
        const newDesignerKr = project.designerName?.kr || '';
        const newDesignerEn = project.designerName?.en || '';
        const newEmail = project.designerEmail || '';
        const newDescriptionKr = project.description?.kr || '';
        const newDescriptionEn = project.description?.en || '';

        setCategory(newCategory);
        setProjectKr(newProjectKr);
        setProjectEn(newProjectEn);
        setDesignerKr(newDesignerKr);
        setDesignerEn(newDesignerEn);
        setEmail(newEmail);
        setDescriptionKr(newDescriptionKr);
        setDescriptionEn(newDescriptionEn);

        if (project.thumbnailUrl) {
          setThumbnailPreview(project.thumbnailUrl);
        }

        if (project.files && project.files.length > 0) {
          const fileUrls = project.files.map(file => file.url);
          setImagePreviewsFromUrls(fileUrls);
        }
      } catch (error) {
        console.error('프로젝트 불러오기 실패:', error);
        alert('프로젝트 정보를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [isEditMode, projectId]);

  const isFormValid = () => {
    return validateProjectForm({
      category,
      projectKr,
      designerKr,
      designerEn,
      email,
      descriptionKr,
      thumbnail,
      thumbnailPreview,
      isEditMode,
    });
  };

  const handleSubmit = async () => {
    if (!isFormValid()) {
      alert('필수 입력 항목을 모두 작성해주세요.');
      return;
    }
    if (loading) return;

    try {
      setLoading(true);

      const payload = await prepareProjectPayload({
        category: category,
        projectKr,
        projectEn,
        designerKr,
        designerEn,
        email,
        descriptionKr,
        descriptionEn,
        thumbnail,
        thumbnailPreview,
        images,
        imagePreviews,
        isEditMode,
      });

      if (isEditMode && projectId) {
        await updateProject(projectId, payload);
        alert('프로젝트가 성공적으로 수정되었습니다.');
      } else {
        await createProject(payload);
        alert('프로젝트가 성공적으로 등록되었습니다.');
      }

      navigateTo('/admin');
    } catch (error: unknown) {
      console.error('프로젝트 저장 실패:', error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : isEditMode
            ? '프로젝트 수정에 실패했습니다.'
            : '프로젝트 등록에 실패했습니다.';
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigateTo('/admin');
  };

  return {
    status: {
      isEditMode,
      loading,
    },
    values: {
      category,
      projectKr,
      projectEn,
      designerKr,
      designerEn,
      email,
      descriptionKr,
      descriptionEn,
    },
    setters: {
      setCategory,
      setProjectKr,
      setProjectEn,
      setDesignerKr,
      setDesignerEn,
      setEmail,
      setDescriptionKr,
      setDescriptionEn,
    },
    media: {
      thumbnailPreview,
      imagePreviews,
      images,
      handleThumbnailUpload,
      handleAdditionalImagesUpload,
      handleSingleImageUpload,
      moveImage,
    },
    actions: {
      isFormValid,
      handleSubmit,
      handleCancel,
    },
  };
}
