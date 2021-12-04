import fetch from 'node-fetch';

// 1.async functionの定義
async function myAsyncFunc() {

    //fetchは非同期関数かつpromiseを返すのawaitキーワードを置く
    const response = await fetch('https://api.github.com/users/github'); // Block this line

    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    //ここでもawait必要
    const data = await response.json();
    //処理を実装
    console.log(data);
    //取得したデータを返してもいい
    return data
}

// 2. 1.で定義したasync funcitonを使う
// 戻り値を使う際は、ここでもawaitが必要。myAsyncFuncはasync functionなのでawaitを置ける
const data = await myAsyncFunc()
.catch(e => {
    console.log('There has been a problem with your fetch operation: ' + e.message);
})

console.log(`Name: ${data.name}`);

