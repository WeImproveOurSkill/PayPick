import { globalStyle, style} from "@vanilla-extract/css";
import {global} from "@/app/globalTheme.css";

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100dvw',
  height: 'calc(100dvh - 40px)',
  padding: '82px 30px 30px 30px',
  backgroundColor: 'rgb(248, 249, 253)',
  justifyContent: 'center',
 });

 export const chatBorder = style({
  display: 'flex',
  flexDirection: 'column',
  // overflowY: 'scroll', 
  height: '100%', 
  border: '1px solid lightGray', 
  padding: '10px',
  marginTop: '10px',
  borderRadius:'20px',
 });

 export const chatBox = style({
  flex: '1',
  overflowY: 'scroll', 
  borderBottom: '1px solid lightGray',
  wordWrap: 'break-word', // 단어가 길면 줄바꿈
  wordBreak: 'break-all', // 긴 단어는 중간에 끊어서라도 줄바꿈
  whiteSpace: 'pre-wrap', // 여러 줄 입력을 허용하고, 공백도 유지
  '::-webkit-scrollbar': {
    width: '10px'
  },
  '::-webkit-scrollbar-track': {
    background: 'transparent'
  },
  '::-webkit-scrollbar-thumb': {
    background: 'gray',  // 밝은 회색으로 설정
    borderRadius: '5px',
    border: '2px solid transparent',
    backgroundClip: 'padding-box'  // border를 제외한 영역에만 배경색 적용
  },
  // Firefox를 위한 스크롤바 스타일
  scrollbarWidth: 'thin',
  scrollbarColor: 'gray transparent'
 });

 export const messageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start', // 메시지와 시간이 왼쪽 정렬
  marginBottom: '8px',
});

// 메시지 내용만 배경 적용
export const messageBox = style({
  display: 'inline-block',
  maxWidth: '100%',
  padding: '10px 15px',
  borderRadius: '20px',
  wordWrap: 'break-word',
  wordBreak: 'break-all',
  background: global.foreground.color,
  color: 'white',
});

// 시간 스타일
export const time = style({
  fontSize: '12px',
  color: 'gray',
  marginTop: '4px',
  marginLeft: '10px',
});

 export const inputBox = style({
  display: 'flex',
  justifyContent: "space-between",
  height:'30px',
  border: '1px solid lightGray',
  borderRadius:'20px',
  marginTop: '10px',
  padding: '0px 8px'
 });

 export const inputField = style({
  height:'30px',
  width: '100%',
  '::placeholder': {
    color: global.foreground.color,
    opacity: '0.7',
  },
 });

 export const button = style({
  background: 'none',
  alignItems: 'center',
  selectors: {
    '&:active': {
      background: 'none'
    }
  }
});

export const sendIcon = style({
  width: '30px',
  height: '30px'
});

// 버튼 active 상태일 때 이미지 스타일 변경
globalStyle(`${button}:active ${sendIcon}`, {
  filter: 'brightness(0.8)'
});

//  export const button = style({
//   width: '30px', 
//   height:'30px',
//   background: 'none',
//   selectors: {
//     '&:active': {
//       background: 'none'
//     }
//   }
//  });

//  export const sendIcon = style({
//   width: '30px',
//   height: '30px',
//   position: 'absolute',
//   left: 0,
//   top: '50%',
//   transform: 'translateY(-50%)'
// });



