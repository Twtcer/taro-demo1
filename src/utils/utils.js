import Taro from '@tarojs/taro';
const foodKey = 'foodKey';

export function getEvent() {
  return myEvent;
}

export function getAllFoodInfo() {
  let store = Taro.getStorageSync(foodKey);
  let allPrice = 0;
  let allNum = 0;
  if (store) {
    Object.keys(store).map((key) => {
      if (store[key]) {
        allPrice += store[key].price * store[key].num;
        allNum += store[key].num;
      }
    });
    return { allPrice, allNum };
  }
}

export function getFoodCount(food) {
  let store = Taro.getStorageSync(foodKey);
  if (store && store[food.id]) {
    return store[food.id].num;
  }
  else {
    return 0;
  }
}
export function setFoodCount(food, num, type, callback) {

  if (food) {
    let store = Taro.getStorageSync(foodKey);
    if (!store) { store = {}; }
    if (type == "add") {
      if (store[food.id]) {
        store[food.id].num = num + 1;

      } else {
        store[food.id] = { num: 1, ...food };
      }
      Taro.setStorageSync(foodKey, store);
      callback && callback();
    }
    else if (type == "cut") {
      if (num == 1) {
        if (store[food.id]) {
          delete store[food.id];
        }
      }
      else {
        if (store[food.id]) {
          store[food.id].num = num - 1;
        }
      }
      Taro.setStorageSync(foodKey, store);
      callback && callback();
    }
  }
}
