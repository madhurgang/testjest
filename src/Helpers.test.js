import { addToList, findIndexOfItem } from "./Helpers";

// test the adder

it('Adds an object to a list of Objects', () => {
  const objToAdd = {
    name: 'sandu', child: 'hridan'
  }

  const list = [
    { name: 'nitin', child: 'oshi' },
    { name: 'amit', child: 'abhi' }
  ]

  const expected = [
    { name: 'nitin', child: 'oshi' },
    { name: 'amit', child: 'abhi' },
    { name: 'sandu', child: 'hridan' }
  ]

  const found = addToList(objToAdd, list)

  expect(found).toEqual(expected)
})

it('find index of an item in list', () => {
  const objToAdd = { name: 'sandu', child: 'hridan' }
  const objToAdd2 = { name: 'sandu1', child: 'hridan' }

  const list = [
    { name: 'nitin', child: 'oshi' },
    { name: 'sandu', child: 'hridan' },
    { name: 'amit', child: 'abhi' }
  ]

  const expected = 1
  const expected2 = -1

  const found = findIndexOfItem(objToAdd, list)
  const notFound = findIndexOfItem(objToAdd2, list)

  expect(found).toEqual(expected)
  expect(notFound).toEqual(expected2)
})

