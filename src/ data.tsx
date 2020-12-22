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
        { title: ["냄새나는 마굿간"], isCorrect: "0" },
        { title: ["율제병원 VIP산부인과"], isCorrect: "1" },
      ],
      answer: ["예수님은 화려하거나", "환영받는 곳이 아닌", "누추한 곳으로 오셨습니다."]
    },
    {
      id: "2",
      stage: 3,
      question: ["X-MAS에서", "X의 의미는?"],
      stageImageURL: "4번째 스테이지 이미지",
      selections: [
        { title: ["구여친 혹은 구남친"], isCorrect: "1" },
        { title: ["예수님"], isCorrect: "0" },
      ],
      answer: ["예수님을 뜻하는", "헬라어 크리스토스", "‘XPIΣTOΣ’의", "첫자로 표기한 것입니다."]
    },
    {
      id: "3",
      stage: 4,
      question: ["'기쁘다 OO오셨네'", " 빈 칸에 들어갈 가사는?"],
      stageImageURL: "5번째 스테이지 이미지",
      selections: [
        { title: ["옥천HUB에 갇혔다가", "일주일만에 온 나의 택배"], isCorrect: "1" },
        { title: ["구주"], isCorrect: "0" },
      ],
      answer: ["구주는 구세주와", " 같은 뜻으로 세상의", "구원자로 오신", "예수님을 뜻합니다."]
    },
    {
      id: "4",
      stage: 5,
      title: "6번째 스테이지 제목",
      question: ["올해 크리스마스 파티로", "알맞은 것은?"],
      stageImageURL: "6번째 스테이지 이미지",
      selections: [
        { title: ["마스크 벗고 클럽 파티"], isCorrect: "1" },
        { title: ["친구들과 ", "랜선 파티"], isCorrect: "0" },
      ],
      answer: ["올해 크리스마스는", "사이버세상에서 안전하고", "홀리하게 보내보아요!", "#코로나꺼져"]
    },
    {
      id: "5",
      stage: 6,
      title: "7번째 스테이지 제목",
      question: ["예수님은", "왜 태어나셨을까요?"],
      stageImageURL: "7번째 스테이지 이미지",
      selections: [
        { title: ["지구정복"], isCorrect: "1" },
        { title: ["우리와 영원히 ", "함께 하시려고"], isCorrect: "0" },
      ],
      answer: ["예수님은", "힘들 때도 외로울 때도", "그리고 영원히 당신과", "함께 하기를 원하십니다."]
    },
  ],

}

export default data