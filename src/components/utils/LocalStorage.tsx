export default function setLocalStorageItem (item, value) { 
    localStorage.setItem(item, value);
}

const getLocalStorageItem = (item) => {
    return localStorage.getItem(item || null);
}

export { getLocalStorageItem };