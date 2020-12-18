import { Box, Button, Text } from "@chakra-ui/react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Snowfall from "react-snowfall";
import shareImage from "../../images/shareImage.png"

declare const Kakao: any;

// initializeKakaotalk은 SDK 초기화를 위해 한 번만 호출되어야 합니다.

const onClick = () => {
  const _window: any = window;
  if (_window.Kakao) {
    const Kakao = _window.Kakao
    console.log(Kakao)
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: "크잘알 모의고사",
        description: '크잘알,태그,태그,태그',
        imageUrl:
          shareImage,
        link: {
          mobileWebUrl: "https://localhost:3000/",
          androidExecParams: 'test',
        },
      },

      buttons: [
        {
          title: '웹으로 이동',
          link: {
            mobileWebUrl: "https://sogmgame.web.app/",
          },
        }
      ]
    });
  }
}

const ResultLink = () => {
  const url = "https://sogmgame.web.app/"

  return (
    <Box width="100%" display="flex" flexDir="column" alignItems="center" justifyContent="center" marginTop="10vh" color="#ffffff">
      <Text>너도 했으면 좋겠다~</Text>
      <Text fontSize="25px" margin="10px 0px 30px 0px">크잘알 테스트 공유하기</Text>
      <Box display="flex">
        <Box width="100px" height="100px" border="1px solid" borderRadius="50%" display="flex" alignItems="center" justifyContent="center" margin="5px">
          <Box onClick={onClick}>
            카카오톡 공유
          </Box>
        </Box>
        <CopyToClipboard text={url}>
          <Button width="100px" height="100px" color="#ffffff" bgColor="#660210" border="1px solid" borderRadius="50%" display="flex" alignItems="center" justifyContent="center" margin="5px" onClick={e => { alert("URL이 복사되었습니다.") }} >
            URL 복사
          </Button>
        </CopyToClipboard>
      </Box>
    </Box>
  )
}
export default ResultLink