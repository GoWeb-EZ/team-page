const quizData = {
  신재형: {
    profileImageURL: '신재형-profile-image.svg',
    name: '신재형',
    brief: 'Progressive Overload, 하루하루 더 나은 사람이 되어갑니다.',
    github: 'https://github.com/shinplest',
    answerList: ['ENTJ', '프론트엔드 🌐', '음주 🍻'],
  },
  김유신: {
    profileImageURL: '김유신-profile-image.svg',
    name: '김유신',
    brief: '사람을 위한 개발을 하고 싶은 프론트엔드 개발자입니다.',
    github: 'https://github.com/yusiny',
    answerList: ['ESFJ', '프론트엔드 🌐', '산책 🚶'],
  },
  신동원: {
    profileImageURL: '신동원-profile-image.svg',
    name: '신동원',
    brief: '항상 최선을 다하려는 개발자입니다.',
    github: 'https://github.com/edv-Shin',
    answerList: ['ISTP', '백엔드 🌿', '게임 👾'],
  },
  정세호: {
    profileImageURL: '정세호-profile-image.svg',
    name: '정세호',
    brief: '오늘의 삶과 내일의 꿈을 이어갑니다.',
    github: 'https://github.com/JeongSH1',
    answerList: ['ISFP', '백엔드 🌿', '영화 감상 🍿'],
  },
};

const quizList = [
  { question: 'MBTI', answers: ['ESFJ', 'ENTJ', 'ISFP', 'ISTP'] },
  { question: '담당 역할', answers: ['프론트엔드 🌐', '백엔드 🌿'] },
  { question: '취미', answers: ['게임 👾', '산책 🚶', '음주 🍻', '영화 감상 🍿'] },
];

export { quizData, quizList };
