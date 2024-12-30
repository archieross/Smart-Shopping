import AsyncStorage from "@react-native-async-storage/async-storage";

async function storeData(key, value) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
}

async function getData(key, ifNothing) {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : ifNothing;
  } catch (e) {
    // error reading value
    return ifNothing;
  }
}

export { storeData, getData };
