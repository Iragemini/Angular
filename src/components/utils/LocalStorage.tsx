export default function setLocalStorageItem(item, value, ...args) {
  if (args[0]) {
    if (localStorage.getItem(item)) {
      const arr = JSON.parse(localStorage.getItem(item));
      arr.push(value);
      localStorage.setItem(item, JSON.stringify(arr));
    }
  } else {
    localStorage.setItem(item, value);
  }
}

const getLocalStorageItem = (item) => {
  return localStorage.getItem(item || null);
};

const initialSet = (item, value) => {
  if (localStorage.getItem(item)) return;
  localStorage.setItem(item, value);
};

export { getLocalStorageItem, initialSet };
