export default function tupleSample() {
  // 一般的なタプルの型定義
  const response: [number, string] = [200, 'OK']
  // response = [400, 'Bad request', 'Email parameter is missing']
  // response = ['400', 'Bad request', 'Email parameter is missing']
  console.log('Array tuple sample 1:', response)

  // 可変長引数を使ったタプル
  const sisters: [string, ...string[]] = ['Kana', 'Miku', 'Keiko']
  sisters.push('Misa')
  console.log('Array tuple sample 2:', sisters)
}
