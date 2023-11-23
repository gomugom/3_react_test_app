import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

/**
 * testing-libary : render로 DOM을 그리는 부분
 * jest-dom : expect-matcher로 테스트
 * 
 */

/*
  Jest가 테스트를 찾아서 실행하는 경우
  1. 파일명에 .test가 들어가는 경우
  2. test 폴더 하위에 있는 경우
  3. 파일명에 spec이 들어가는 경우
*/

test("renders learn react link", () => {
  // render => Test에 필요한 Component를 DOM에 랜더링하는 함수
  render(<App />);
  // [ Query 함수란? ]
  // 페이지에서 요소를 찾기 위해 테스트 라이브러리가 제공하는 방법 ex) get, find, query
  /*
  1. getBy : 쿼리에 대해 일치하는 노드를 반환하고 일치하는 요소가 없거나 둘 이상의 일치가 발견되면 오류를 발생시킴
    -> 둘 이상의 요소가 예상되는 경우 getAllBy를 사용
  2. queryBy : 일치하는 노드를 반환하되 없을경우 오류가 아닌 null을 반환한다.
  3. findBy : 주어진 쿼리와 일치하는 요소가 발견되면 Promise를 반환한다.
    ==> getBy + waitFor = findBy
  4. waitFor : 일정 기간 동안 기다려야 할 때(비동기)
  */
  // const linkElement = screen.getByText(/learn react/i);

  // expect               matcher
  // expect(linkElement).toBeInTheDocument();
  // 테스팅할 때 matcher를 알맞게 쓰는지 확신이 들지 않을 때가 있으며, 코드의 형식이나
  // 자바스크립트 문법 등을 올바르게 쓰지 못할 때가 있다. 그러한 부분을 도와주는 모듈이 "Prettier" | "ESLint"

  // ESLint : 주요 목적은 문법 오류를 잡아주는 역할
    // => create-react-app하면 기본 설정되어있음, 추가로 실행전에 문법 오류 잡으려면
    // => 확장프로그램으로 eslint를 설치해주어야함
  // Prettier : 주로 코드 형식을 맞추는데 사용 (작은따옴표사용할지, 큰따옴표사용할지, indent 2로 줄지 4로 줄지 등 코드 포매터역할)
  // => VSCODE 익스텐션으로도 사용가능하나 npm으로 사용해야 공동작업자도 할 수 있음으로 경우에 따라 정하자

  // const lintTest = screen.getByRole('button', {
  //   name : 'lintTest'
  // });

  // expect(lintTest.textContent).toBe('lintTest');

});


test('the counter starts at 0', () => {
  render(<App />);
  const counterElement = screen.getByTestId('counter');
  
  expect(counterElement).toHaveTextContent(0);
});

test('minus button has correct text', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('minus-button');
  expect(buttonElement).toHaveTextContent('-');
});

test('plus button has correct text', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('plus-button');
  expect(buttonElement).toHaveTextContent('+');
});

test('when the + button is pressed, the counter changes value', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('plus-button');
  // fireEvent => 사용자 동작을 수행할 때 사용됨
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});

test('when the - button is pressed, the counter changes value', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('plus-button');
  fireEvent.click(buttonElement);

  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(1);
});

test('on/off button has blue color', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('on/off-button');
  expect(buttonElement).toHaveStyle({backgroundColor: "blue"});

});

test('Prevent the -,+ button from being pressed when the on/off button is clicked', () => {
  render(<App />);
  const onOffButtonElement = screen.getByTestId('on/off-button');
  fireEvent.click(onOffButtonElement);

  const plusButtonElement = screen.getByTestId('plus-button');
  expect(plusButtonElement).toBeDisabled();
});