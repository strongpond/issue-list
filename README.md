# issue list

1. [프로젝트 소개 🚀](#1-프로젝트-소개-)
2. [기술 스택 🛠](#2-기술-스택-)
3. [구현 기능 📍](#3-구현-기능-)
4. [프로젝트 구조 🗂](#4-프로젝트-구조-)
5. [프로젝트 설치 및 실행 ✨](#5-프로젝트-설치-및-실행-)

<br/>

[🌍 배포 링크](https://issue-list-strongpond.vercel.app/)

<br />

## 1. 프로젝트 소개 🚀

- 개요 : 원티드 프론트엔드 프리온보딩 과제 중 Best Practice (**개인프로젝트**❗️)
- 주제 : 특정 깃헙 레파지토리의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축
- 기간 : 2022.10.29 ~ 2022.10.30

<br />

## 2. 기술 스택 🛠

- React
- Javascript
- Styled-Components
- Recoil
- Vercel(배포)

<br />

## 3. 구현 기능 📍

- 이슈 목록 페이지 구현
  - 무한스크롤
  - 광고배너 삽입
- 상세 이슈 페이지 구현
- 뒤로가기 기능 (상세 to 목록)
- Recoil을 활용한 이슈 상태관리 및 API 연동
- 데이터 요청 중 로딩 표시
- 지정조건에 맞게 데이터 요청 및 표시

<br />

## 4. 프로젝트 구조 🗂

```bash
src
├── apis  // issue 관련 api service 요청
├── assets  // 전역 스타일링
├── atoms  // 전역 상태관리 (Recoil)
├── components  // 공용 컴포넌트
├── hooks // fetch 관련 커스텀 훅
└── pages // 페이지 및 페이지 고유 컴포넌트
```

<br/>

<br>

## 5. 프로젝트 설치 및 실행 ✨

<br/>

1. Git Clone

```plaintext
$ git clone https://github.com/strongpond/issue-list.git
```

2. 프로젝트 패키지 설치

```plaintext
$ npm install
```

3. 프로젝트 실행

```plaintext
$ npm start
```
