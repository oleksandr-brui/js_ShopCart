'use strict';

function makeOrderList(order) {
  // write code here
  if (order === '') {
    return {};
  }

  const splitOrder = order.split(',');
  const resultOrder = {};

  for (const elem of splitOrder) {
    const currentString = elem.trim();
    const splitElem = currentString.split(' ');
    const value = splitElem[0];
    let key = splitElem[1];

    if (splitElem.length > 2) {
      for (let i = 2; i < splitElem.length; i++) {
        key += '_' + splitElem[i];
      }
    }

    resultOrder[key] = value;
  }

  return resultOrder;
}

makeOrderList('10 pepsi, 20 slice bread, 25 onions, 40 fries');
