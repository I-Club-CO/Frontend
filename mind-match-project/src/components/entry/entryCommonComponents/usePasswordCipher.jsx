import CryptoJS from "crypto-js";
const useDecryptPassword = (encryptPassword) => {
    const bytes = CryptoJS.AES.decrypt(encryptPassword, "secret-key");
    return bytes.toString(CryptoJS.enc.Utf8);
};
export { useDecryptPassword };

const useEncryptPassword = (password) => {
    return CryptoJS.AES.encrypt(password, "secret-key").toString();
};
export { useEncryptPassword };
