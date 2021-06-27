export default function notExistSample() {
  let name = null
  console.log('notExist sample 1:', typeof name, name)

  name = 'くま'
  if (name) {
    console.log('notExist sample 2:', '名前は' + name)
  } else {
    console.log('notExist sample 3:', '名前はまだ' + name)
  }

  let age = undefined
  console.log('notExist sample 4:', typeof age, age)

  age = 24
  if (age) {
    console.log('notExist sample 5:', '年齢は' + age)
  } else {
    console.log('notExist sample 6:', '年齢は秘密')
  }
}
