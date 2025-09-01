'use client';

import { fetchProjects } from '@/apis/project';
import { useAuth } from '@/apis/useAuth';
import { Button } from '@/components/Button/Button';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import InputField from '@/components/inputField/InputField';
import { Project } from '@/types/project';
import { useEffect, useState } from 'react';
import * as S from './page.styles';

export default function AdminPage() {
  //TODO: error에 따른 UI 처리 필요
  const { me, error, login, logout } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
      setUsername('');
      setPassword('');
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (me) {
      (async () => {
        setLoading(true);
        try {
          const response = await fetchProjects();
          setProjects(response.data);
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      })();
    } else {
      setProjects([]);
    }
  }, [me]);

  return (
    <>
      <Header headerType="main" />
      <S.Wrapper>
        {!me && (
          <>
            <S.SectionContainer>
              <S.TitleContainer>관리자 설정 작품 등록</S.TitleContainer>
              <S.TextContainer>
                해당 페이지는 관리자 전용입니다. 관리자 외 사용자는 페이지를 종료해 주세요.
              </S.TextContainer>
            </S.SectionContainer>
            <S.SectionContainer as="form" onSubmit={handleLogin}>
              <S.TitleContainer>관리자 접근 로그인</S.TitleContainer>
              <InputField
                placeholder="아이디를 입력하세요"
                value={username}
                onChange={setUsername}
              />
              <InputField
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={setPassword}
              />
              <Button variant="submit" label="로그인" disabled={!username || !password} />
            </S.SectionContainer>
          </>
        )}

        {!loading && me && (
          <>
            <S.SectionContainer>
              <S.TitleContainer>원하는 작업을 선택하세요.</S.TitleContainer>
              <Button variant="submit" label="등록" />
            </S.SectionContainer>

            <S.ProjectsSectionContainer>
              <S.TitleContainer>등록 완료 프로젝트</S.TitleContainer>
              {projects.map(project => (
                <S.ProjectRow key={project.projectId}>
                  <S.ProjectCardContainer>{project.designerNameKr}</S.ProjectCardContainer>
                  <S.ProjectCardContainer>{project.projectNameKr}</S.ProjectCardContainer>
                  <Button variant="submit_sub" label="수정" />
                </S.ProjectRow>
              ))}
            </S.ProjectsSectionContainer>

            <Button variant="submit" label="로그아웃" onClick={logout} />
          </>
        )}
      </S.Wrapper>
      <Footer footerType="sub" />
    </>
  );
}
