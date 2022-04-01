import * as types from './ActionsTypes';

export const increment = () => ({
    type: types.INCREMENT
});

export const decrement = () => ({
    type: types.DECREMENT
});

// 다른 액션 생성자들과 달리, 파라미터를 갖고있습니다
export const setColor = (color) => ({
    type: types.SET_COLOR,
    color
});