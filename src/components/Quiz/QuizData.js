const quizData = {
  신재형: {
    profileImageURL: '신재형-profile-image.svg',
    name: '신재형',
    role: 'Frontend',
    brief: '간단한 설명',
    github: 'https://github.com/yusiny',
    answerList: ['ESTJ', '프론트엔드 🌐', '산책 🚶'],
  },
  김유신: {
    profileImageURL: '김유신-profile-image.svg',
    name: '김유신',
    role: 'Frontend',
    brief: '간단한 설명',
    github: 'https://github.com/yusiny',
    answerList: ['ESTJ', '프론트엔드 🌐', '산책 🚶'],
  },
  신동원: {
    profileImageURL: '신동원-profile-image.svg',
    name: '신동원',
    role: 'Backend',
    brief: '간단한 설명',
    github: 'https://github.com/yusiny',
    answerList: ['ESTJ', '백엔드 🌿', '산책 🚶'],
  },
  정세호: {
    profileImageURL: '정세호-profile-image.svg',
    name: '정세호',
    role: 'Backend',
    brief: '오늘의 삶과 내일의 꿈을 이어갑니다.',
    github: 'https://github.com/yusiny',
    answerList: ['ESTJ', '백엔드 🌿', '산책 🚶'],
  },
};

const quizList = [
  { question: 'MBTI', answers: ['ENTJ', 'ESTJ', 'ESFJ', 'ISTJ'] },
  { question: '담당 역할', answers: ['프론트엔드 🌐', '백엔드 🌿'] },
  { question: '취미', answers: ['수영 🏊‍♂️', '산책 🚶', '독서 📖', '영화 🍿'] },
];

export { quizData, quizList };
