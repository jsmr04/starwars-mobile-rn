import AsyncStorage from '@react-native-async-storage/async-storage';

export const save = async (key: string, data: string) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
      console.log(error)
  }
};

export const get = async (key: string) => {
  try {
    const session = await AsyncStorage.getItem(key);
    return session
  } catch (error) {
    console.log(error)
  }
};

export const getAll = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const promises = keys.map(x => get(x))

    if (!promises) return []
    const result = await Promise.all(promises)
    
    if (!result) return []
      
    const favorites = result.reduce((acc: string[], x) => (x ? acc.concat(x) : acc),[])
    return favorites
    
  } catch (error) {
    console.log(error)
  }
};

export const remove = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error)
  }
};

export const exists = async (key: string) => {
  try {
    const data = await get(key)
    return data ? true : false
  } catch (error) {
    console.log(error)
  }
};
