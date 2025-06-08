import { style, keyframes } from '@vanilla-extract/css';

const slideUp = keyframes({
  '0%': { 
    // opacity: 0,
    transform: 'translateY(40px)' // footer height만큼만 이동
  },
  '100%': { 
    opacity: 1,
    transform: 'translateY(0)' 
  }
});

const slideDown = keyframes({
  '0%': { 
    opacity: 1,
    transform: 'translateY(0)' 
  },
  '100%': { 
    // opacity: 0,
    transform: 'translateY(40px)' 
  }
});

export const container = style({
  position: 'fixed',
  maxHeight: '40%',
  bottom: '40px', // footer의 height만큼 띄움
  backgroundColor: 'white',
  padding: '20px',
  // boxShadow: '0 -2px 10px rgba(0,0,0,0.2)',
  zIndex: '99',
  opacity: 0, // 초기 상태는 투명
  transform: 'translateY(40px)', // 초기 위치는 footer height만큼 아래
  border: 'solid lightGray',
  borderWidth: '1px 1px 0 1px',
  overflowY: 'scroll', 
  '@media': {
    'screen and (max-width: 1000px)': {
      width: '100%',
      left: 0,
      right: 0,
    },
    'screen and (min-width: 1001px)': {
      width: '33.33%', // footer menu가 3등분되어 있으므로
      left: 0, // 첫 번째 메뉴 위치
      borderRadius: '12px 12px 0 0'
    }
  }
});

export const storeContainer = style({
  // overflowY: 'scroll', 
});

export const visible = style({
  animation: `${slideUp} 0.1s ease-in-out forwards`
});

export const hidden = style({
  animation: `${slideDown} 0.1s ease-in-out forwards`
});

export const closeButton = style({
  cursor: 'pointer',
  textAlign: 'right',
});

export const storeItem = style({
  padding: '8px 0',
  borderBottom: '1px solid #eee'
});