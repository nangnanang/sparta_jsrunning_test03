// 위 1번 문제에서 다루었던 비동기 처리를 `async`, `await` 키워드를 사용하여 코드를 수정해서 작성해주세요.

// ```javascript
// async await 를 사용한 코드로 변경해보기
// ```

async function getData() {
  const data = await fetch(url)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => console.log(error));

  return data;
}
