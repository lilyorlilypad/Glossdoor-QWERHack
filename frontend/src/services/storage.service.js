import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAyyDGPT5aWrTdZZ4tb6__yIyn0rPVt24A",
  authDomain: "glossdoor-8eb0a.firebaseapp.com",
  projectId: "glossdoor-8eb0a",
  storageBucket: "glossdoor-8eb0a.appspot.com",
  messagingSenderId: "699512170237",
  appId: "1:699512170237:web:5b41418fcb4e2e69340094",
};

const app = initializeApp(firebaseConfig);

class StorageService {
  storage = getStorage(app);

  /**
   * Upload a file to Firebase Storage.
   *
   * @param {Blob | Uint8Array | ArrayBuffer} data Bytes to upload.
   * @param {"user" | "company"} type Type of ID to upload on behalf of.
   * @param {string} id ID of user to upload file on behalf of.
   * @param {string} name Name of file to use within the storage directory.
   * @returns {Promise<string | null>} Download URL of uploaded file, or null if
   * upload failed.
   */
  async uploadFile(data, type, id, name) {
    const topLevelDirectory = this._getTopLevelDirectory(type);
    const path = `${topLevelDirectory}/${id}/${name}`;
    const storageRef = ref(this.storage, path);
    let result;
    try {
      result = await uploadBytes(storageRef, data);
    } catch (error) {
      console.error(error);
      return null;
    }
    return await this._getURLFromRef(result.ref);
  }

  /**
   * Get the download URL for a file in Firebase Storage.
   *
   * @param {"user" | "company"} type Type of ID to retrieve file from.
   * @param {string} id ID of entity the file belongs to.
   * @param {string} name Name of file within user's storage directory.
   * @returns {Promise<string | null>} Download URL of requested file, or null
   * if the file does not exist.
   */
  async getURL(type, id, name) {
    const topLevelDirectory = this._getTopLevelDirectory(type);
    const path = `${topLevelDirectory}/${id}/${name}`;
    const storageRef = ref(this.storage, path);
    return await this._getURLFromRef(storageRef);
  }

  /**
   * @private
   */
  _getTopLevelDirectory(type) {
    switch (type) {
      case "company":
        return "companies";
      case "user":
        return "users";
      default:
        throw new Error(`invalid uploadFile type=${type}`);
    }
  }

  /**
   * @private
   */
  async _getURLFromRef(storageRef) {
    try {
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

const storageService = new StorageService();
export default storageService;
