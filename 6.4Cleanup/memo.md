'Hide' 버튼을 통해 어떤 컴포넌트를 {showing ? <Hello /> : null} null로 만든다면
단순히 안보이게 가리는 것이 아닌, 아예 destroyed된다.
이 때 useEffect를 통해 생성과 소멸 시 어떤 함수와 같은 것들을 실행할 수 있다.

function Hello() {
useEffect(() => {
console.log("hi");
return () => {
console.log("bye");
};
}, []);

이와 같이 어떤 컴포넌트의 소멸엔 return이 필요한데, 그 때 할 행동을 작성해주면 된다.
