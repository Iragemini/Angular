import setLocalStorageItem from '../../components/utils/LocalStorage';

const setGame = () => {
    setLocalStorageItem("gameStatus", "false");
    setLocalStorageItem("gameLevel", "easy");
}

export default setGame;