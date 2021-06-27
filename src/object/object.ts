export default function objectSample() {
  // オブジェクトリテラル記法で型定義
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }
  console.log('Object object sample 1:', country)

  country = {
    language: 'Chinese',
    name: 'China',
  }
  console.log('Object object sample 2:', country)

  // オプショナルとreadonly
  const kuma: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 24,
    lastName: 'Yamada',
    firstName: 'Hanako',
  }
  kuma.gender = 'female'
  kuma.lastName = 'Hamada'
  console.log('Object object sample 3:', kuma)

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }
  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'
  console.log('Object object sample 4:', capitals)
}
