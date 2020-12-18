var data = {
  correctCount: 0,
  stages: [
    {
      id: "0",
      stage: 1,
      question: ["크리스마스는", "누가 태어난 날일까요?"],
      stageImageURL: "1번째 스테이지 이미지",
      selections: [
        { title: ["산타클로스 할아버지"], isCorrect: "1" },
        { title: ["지저스 ", "크라이스트"], isCorrect: "0" },
      ],
      answer: ["크리스마스는 예수님을", "뜻하는 크라이스트(CHRIST)와", "MAS(예배)가 합쳐진", "단어입니다."]
    },
    {
      id: "1",
      stage: 2,
      question: ["예수님이", "태어난 장소는?"],
      stageImageURL: "2번째 스테이지 이미지",
      selections: [
        { title: ["냄새나는", "마굿간"], isCorrect: "0" },
        { title: ["율제병원 IP산부인과"], isCorrect: "1" },
      ],
      answer: ["예수님은 우리를", "위해서 가장 낮은 곳으로", " 오셨어요."]
    },
    {
      id: "2",
      stage: 3,
      question: ["다음 중 예수님이", "타셨던 동물은?"],
      stageImageURL: "3번째 스테이지 이미지",
      selections: [
        { title: ["루둘프"], isCorrect: "1" },
        { title: ["나귀"], isCorrect: "0" },
      ],
      answer: ["멋진 말이 아니라", " 나귀를 타셨어요!"]
    },
    {
      id: "3",
      stage: 4,
      question: ["크리스마스를 'X-MAS'라고", "하는데요 왜 'X'를 쓸까요?"],
      stageImageURL: "4번째 스테이지 이미지",
      selections: [
        { title: ["크리스마스에는 구여친/구남친이", "생각나기 때문에"], isCorrect: "1" },
        { title: ["X가 예수님을 ", "뜻하기 때문에"], isCorrect: "0" },
      ],
      answer: ["헬라어로 예수는", "‘XPIΣTOΣ’의 ", "첫자로 표기한 것."]
    },
    {
      id: "4",
      stage: 5,
      question: ["지금 흘러 나오고 있는", "'기쁘다 OO오셨네'", " 빈 칸에 들어갈 가사는?"],
      stageImageURL: "5번째 스테이지 이미지",
      selections: [
        { title: ["금요일 밤에 시켜서 주말내내 기다렸는데", "월요일에 옥천HUB에 갇혔다가", "일주일만에 온 나의 택배"], isCorrect: "1" },
        { title: ["구주"], isCorrect: "0" },
      ],
      answer: ["구주는 구세주와", " 같은 뜻으로 예수님을", "뜻합니다."]
    },
    {
      id: "5",
      stage: 6,
      title: "6번째 스테이지 제목",
      question: ["올해 크리스마스 파티로", "알맞은 것은?"],
      stageImageURL: "6번째 스테이지 이미지",
      selections: [
        { title: ["마스크 벗고 클럽 파티"], isCorrect: "1" },
        { title: ["친구들과 ", "랜선파티"], isCorrect: "0" },
      ],
      answer: ["코로나 제발 꺼져!"]
    },
    {
      id: "6",
      stage: 7,
      title: "7번째 스테이지 제목",
      question: ["예수님은", "왜 태어나셨을까?"],
      stageImageURL: "7번째 스테이지 이미지",
      selections: [
        { title: ["지구정복"], isCorrect: "1" },
        { title: ["우리의 친구가 ", "되어주시기 위해"], isCorrect: "0" },
      ],
      answer: ["예수님은 당신의 인생길의", "친구가 되고싶어서", "이땅에 오셨어요."]
    },
  ],

}

export default data