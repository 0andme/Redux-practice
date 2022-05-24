# Redux-practice

Redux 리덕스 공부 기록

실습 환경

```shell
npx creat-react-app redux-start
npm i redux
```

#### 액션

액션은 사실 객체이다. 두가지 형태의 액션이 있다. `type`만 필수 프로퍼티이며 문자열이다.

```js
{
  type: 'test',
  params:'hello'
}
```

액션을 생성하는 함수를 액션 생성자라고 한다.
함수를 호출하고 리턴값으로 액션 객체를 리턴해준다.

리덕스 스토어가 액션 객체를 받으면 스토어의 상태값이 변경된다. 변경된 상태값에 의해 해당 값을 이용하고 있는 컴포넌트 값이 변경된다.액션은 일종의 인풋이다.

1. 액션의 `타입`을 변수로 정의하기
   액션의 타입은 문자열이므로 실수를 방지하기 위해 변수로 해당 문자열을 미리 뺴두는 것이 좋다.

2. 액션 객체를 만드는 함수를 정의하기

```js
export const ADD_TODO = "ADD_TODO";

function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}
```

#### 리듀서 함수

액션을 받으면 그 액션이 적용된 결과를 만들어준다. 리덕스에서 리듀서를 통해 상태가 달라졌음을 인지하는 방식 때문에 기존 상태와 새로운 상태 객체가 별도의 객체여야한다.

```js
function 리듀서('기존스테이트',액션) {
  return '새로운 스테이트'
}
```

```js
import { ADD_TODO } from "./actions.js";
// state의 초기값
const initialState = [];

function todoApp(previousState = initialState, action) {
  if (action.type === ADD_TODO) {
    return [...previousState, action.todo];
  }
  return previousState;
}
```

#### 함수들

- createStore(reducer함수명)
  - store를 생성
- store.getState()
  - 현재 state 리턴
- store.dispatch(액션객체=액션생성자함수())
  - state값 변경

ex.
const store=createStore(todoApp)
store.dispatch(addTodo('바꾸고자하는 데이터'))

- store.subscribe(()=>{})
  - store의 state가 변경되는 것을 감지하는 함수. 해당 함수의 리턴값은 unsubscribe
- unsubscribe()
  - 더이상 변경 감지 안 함
- store.replaceReducer()
  - 원래 리듀서를 다른 리듀서로 바꿈. 실무에서 잘 쓰이지 않음
