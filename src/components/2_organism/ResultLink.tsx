import { Image, Box, Button, Text, Link } from "@chakra-ui/react"
import { CopyToClipboard } from "react-copy-to-clipboard"


declare const Kakao: any;

const onClick = () => {
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '크잘알 능력고사',
      description: "크리스마스에 대해 얼마나 알고 있는지 알아볼까요?!",
      imageUrl:
        'http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
      link: {
        mobileWebUrl: 'https://sogmgame.web.app',
        androidExecParams: 'test',
      },
    },
    buttons: [
      {
        title: '능력고사 참여하기',
        link: {
          mobileWebUrl: 'https://sogmgame.web.app',
        },
      },
    ]
  });
}


const ResultLink = () => {
  const url = "https://sogmgame.web.app/"

  return (
    <Box width="100%" display="flex" flexDir="column" alignItems="center" justifyContent="center" marginTop="10vh" color="#ffffff">
      <Text fontSize={[15, 25, 40, 50]}>너도 했으면 좋겠다~</Text>
      <Text fontSize={[20, 30, 50, 60]} margin="10px 0px 30px 0px">'크잘알 테스트' 공유하기</Text>
      <Box display="flex" >
        <Box width={["100px", "200px", "300px", "350px"]} height={["100px", "200px", "300px", "350px"]} fontWeight={600} bgColor="#ffffff" border="4px solid #43030C" color="#000000" borderRadius="50%" display="flex" alignItems="center" justifyContent="center" margin="5px">
          <Box fontSize={[17, 30, 40, 70]} onClick={onClick}>
            카카오톡
          </Box>
        </Box>
        <CopyToClipboard text={url}>
          <Button fontSize={[17, 30, 40, 70]} width={["100px", "200px", "300px", "350px"]} height={["100px", "200px", "300px", "350px"]} fontWeight={600} bgColor="#ffffff" border="4px solid #43030C" color="#000000" borderRadius="50%" display="flex" alignItems="center" justifyContent="center" margin="5px" onClick={e => { alert("URL이 복사되었습니다.") }} >
            URL복사
          </Button>
        </CopyToClipboard>
      </Box>
      <Box marginY="7vh" display="flex" flexDir="column" alignItems="center" justifyContent="center">
        <Text fontSize={[12, 20, 25, 30]}>sogm에 대하여 더 궁금한게 있다면,</Text>
        <Text fontSize={[12, 20, 25, 30]}>아래 로고를 눌러주세요!</Text>
      </Box>
      <Box width="20%">
        <Link href="https://www.instagram.com/sogm/" >
          <Image src={process.env.PUBLIC_URL + "/images/sogmLogo.png"} />
        </Link>
      </Box>
    </Box>
  )
}
export default ResultLink