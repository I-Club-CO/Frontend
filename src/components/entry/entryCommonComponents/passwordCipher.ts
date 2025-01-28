import CryptoJS from "crypto-js";

const secretKey = "my-very-secure-key";

const decryptPassword = (encryptPassword: string): string => {
    const bytes: string = CryptoJS.AES.decrypt(
        encryptPassword,
        secretKey
    ).toString(CryptoJS.enc.Utf8);
    return bytes;
};

const encryptPassword = (password: string): string => {
    const encrypted: string = CryptoJS.AES.encrypt(
        password,
        secretKey
    ).toString();
    return encrypted;
};
export { encryptPassword, decryptPassword };
