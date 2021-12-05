import fetch from 'node-fetch';

// 1.async functionの定義
async function myAsyncFunc() {

    //fetchは非同期関数かつpromiseを返すのでawaitキーワードを置く
    const response = await fetch('https://api.github.com/users/github'); // Block this line

    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    //ここでもawait必要
    const data = await response.json();
    //処理を実装
    //console.log(data);
    //取得したデータを返してもいい
    return data
}

const promiseArr = [];
//10個の並列呼び出し
for(let i = 0; i < 10; i++) {
	//ここがポイント。あえてawaitを置かずにPromiseを取得する。
	const p = myAsyncFunc();
	promiseArr.push(p);
}

//Promiseがすべて解決するのをここで待つ
const results = await Promise.all(promiseArr);
console.log(`Length of results: ${results.length}`);
console.log(results);
