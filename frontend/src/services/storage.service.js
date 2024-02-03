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
   * @param {string} userId ID of user to upload file on behalf of.
   * @param {string} name Name of file to use within user's storage directory.
   * @returns {Promise<string | null>} Download URL of uploaded file, or null if
   * upload failed.
   */
  async uploadFile(data, userId, name) {
    const path = `${userId}/${name}`;
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
   * @param {string} userId ID of user the file belongs to.
   * @param {string} name Name of file within user's storage directory.
   * @returns {Promise<string | null>} Download URL of requested file, or null
   * if the file does not exist.
   */
  async getURL(userId, name) {
    const path = `${userId}/${name}`;
    const storageRef = ref(this.storage, path);
    return await this._getURLFromRef(storageRef);
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
