// import World from './world'

// const root = document.getElementById('root')
// const world = new World('Hello World!')
// world.sayHello(root)

// 03.基本の型定義
// import { unknownSample, anySample, notExistSample, primitiveSample } from './basic'

// unknownSample()
// anySample()
// notExistSample()
// primitiveSample()

// 04.関数の型定義
// import { logMessage } from './function/basic'
// import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters'

// logMessage('Hello TypeScript!')
// isUserSignedIn('ABC', 'くま')
// isUserSignedIn('DEF')
// isUserSignedIn2('ABC')
// const sum = sumProductsPrice(100, 200, 300, 400, 500)
// console.log('Function parameters sample 5:', sum)

// 05.オブジェクトの型定義
// import objectSample from './object/object'
// import typeAliasSample from './object/alias'
// objectSample()
// typeAliasSample()

// 06.配列とタプルの型定義
// import arraySample from './array/array'
// import tupleSample from './array/tuple'
// arraySample()
// tupleSample()

// 07.ジェネリック型とポリモーフィズム
import genericsBasicSample from './generics/basic'
import genericsAdvancedSample from './generics/advanced'
genericsBasicSample()
genericsAdvancedSample()
