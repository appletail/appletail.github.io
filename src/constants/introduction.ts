const introduceTexts = <T extends number>(fontSize1: T, top1: T, fontSize2: T, top2: T) => [
  {
    id: 'text1',
    text: '원리를 궁금해하는',
    style: {
      fontSize: `${fontSize1}rem`,
      top: `${top1}rem`,
    }
  },
  {
    id: 'text2',
    text: '사용자를 우선시하는',
    style: {
      fontSize: `${fontSize1}rem`,
      top: `${top1 + fontSize1}rem`,
    }
  },
  {
    id: 'text3',
    text: 'FRONT-END',
    style: {
      fontSize: `${fontSize2}rem`,
      top: `${top2}rem`,
    }
  },
  {
    id: 'text4',
    text: 'SHIM JAE WON',
    style: {
      fontSize: `${fontSize2}rem`,
      top: `${top2 + fontSize2}rem`,
    }
  },
]

export default introduceTexts