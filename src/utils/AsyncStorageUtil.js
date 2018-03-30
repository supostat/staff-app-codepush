import { AsyncStorage } from "react-native";

class AsyncStorageUtil {
  static async getAsyncStorage(key) {
    try {
      const response = await AsyncStorage.getItem(key);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async setAsyncStorage(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      throw new Error(error);
    }
  }

  static async removeAsyncStorage(key) {
    try {
      const response = await AsyncStorage.removeItem(key);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async clearAllStorageElement() {
    try {
      const response = await AsyncStorage.clear();
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}
export default AsyncStorageUtil;
