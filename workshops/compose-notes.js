const add = (a, b) => a + b
const multiply = (a, b) => a * b

1 + 2 * 3 // 7
1 * 2 + 3 // 5

add(multiply(2, 3), 1)
add(multiply(1, 2), 3)

const multiply1and2AndAdd3 = () => {
  return add(multiply(1, 2), 3)
}

multiply1and2AndAdd3()

f(g(h(i(j(x(y(a(4))))))))

compose(f, g, h, i, j, x, y, a)(4)
const combinationOfAllFunctions = compose(f, g, h, i, j, x, y, a)

combinationOfAllFunctions(4)
combinationOfAllFunctions(7)
combinationOfAllFunctions(10)

// compose(combinationOfAllFunctions, a, b, c)

// pipe(c, b, a, combinationOfAllFunctions)

// const add = (a, b) => a + b
const add = a => b => a + b
const multiply = a => b => a * b

1 + 2 * 3 // 7
const multiplyBy3AndAdd1 = pipe(
  multiply(3), // b => 3 * b
  add(1) // b => 1 + b
)

multiplyBy3AndAdd1(2) // 7
multiplyBy3AndAdd1(5) // 16
multiplyBy3AndAdd1(7) // 22

const andMultiplyBy2 = pipe(
  multiplyBy3AndAdd1, // a => ashda
  multiply(2)
)

andMultiplyBy2(2) // 14
andMultiplyBy2(5) // 32
andMultiplyBy2(7) // 44

const subtract = a => b => a - b

const andSubtract1 = pipe(
  andMultiplyBy2,
  subtract(1)
)

andSubtract1(2) // 13
andSubtract1(5) // 31
andSubtract1(7) // 43

[{isDone: true}, {isDone: false}] -> [true, false] -> [false] -> 1


const itemsLeft = pipe(
  map(todo => todo.isDone),
  filter(isDone => isDone === false),
  length,
)

todos1
  .map(todo => todo.isDone)
  .filter(isDone => isDone === false)
  .length

todos2
  .map(todo => todo.isDone)
  .filter(isDone => isDone === false)
  .length





itemsLeft(todos1)
itemsLeft(todos2)

itemsLeft(visibleTodos)
itemsLeft(favouriteTodos)
itemsLeft(myTodos)


const doubleEachElement = pipe(
  map(x => x * 2)
)

const arr1 = [1, 2, 3]
const arr2 = [2, 3, 4]

doubleEachElement(arr1) -> [2, 4, 6]
doubleEachElement(arr2) -> [4, 6, 8]

[
  {
    firstName: 'Jan',
    books: [
      {id: 1}, {id: 2}, {id: 3}
    ]
  },
  {
    firstName: 'Kacper',
    books: [
      {id: 1}
    ]
  },
  {
    firstName: 'Anna',
    books: [
      {id: 1}, {id: 2}
    ]
  }
]

const getUserBooks = user => user.books
const countBooks = books => books.length
// [3, 1, 2] -> 6
const countTotalBooksNumber = booksNumber => {
  // 0 + 3 -> 3
  // 3 + 1 -> 4
  // 4 + 2 -> 6

  return booksNumber.reduce((acc, value) => {
    return acc + value
  }, 0)
}

const countTotalBooksNumber = reduce(add, 0)
countTotalBooksNumber([1, 2, 3, 4]) // -> 10
countTotalBooksNumber([1, 2, 3]) // -> 6

const countEveryUserBooks = pipe(
  map(getUserBooks), // -> [[{ id: 1 }, { id: 2 }]]
  map(countBooks), // -> [1, 2, 3]
  countTotalBooksNumber
)

countEveryUserBooks([
  {
    firstName: 'Jan',
    books: [
      {id: 1}, {id: 2}, {id: 3}
    ]
  },
  {
    firstName: 'Kacper',
    books: [
      {id: 1}
    ]
  },
  {
    firstName: 'Anna',
    books: [
      {id: 1}, {id: 2}, {id: 4}
    ]
  }
]) // -> 7