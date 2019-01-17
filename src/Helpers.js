import React from 'react'
// find the index of an item in a list

export const findIndexOfItem = (item, list) => {
  return list.findIndex(x => x.name == item.name)
}

export const addToList = (item, list) => {
  return [...list, item]
}