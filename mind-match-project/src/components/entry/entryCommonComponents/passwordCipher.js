import CryptoJS from "crypto-js";
const decryptPassword = (encryptPassword) => {
    const bytes = CryptoJS.AES.decrypt(encryptPassword, "secret-key");
    return bytes.toString(CryptoJS.enc.Utf8);
};
export { decryptPassword };

const encryptPassword = (password) => {
    return CryptoJS.AES.encrypt(password, "secret-key").toString();
};
export { encryptPassword };
