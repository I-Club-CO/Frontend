import CryptoJS from "crypto-js";

const decryptPassword = (encryptPassword: string): string => {
    const bytes = CryptoJS.AES.decrypt(encryptPassword, "secret-key");
    console.log(bytes)
    return bytes.toString(CryptoJS.enc.Utf8);
};
export { decryptPassword };

const encryptPassword = (password: string): string => {
    return CryptoJS.AES.encrypt(password, "secret-key").toString();
};
export { encryptPassword };
