import CryptoJS from "crypto-js";

// type EncryptedData = { 
//     toString(formatter?: any): string
// }

const secretKey = "my-very-secure-key"

const decryptPassword = (encryptPassword: string): string => {
    const bytes: any = CryptoJS.AES.decrypt(encryptPassword, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
};

const encryptPassword = (password: string): string => {
    const encrypted: any = CryptoJS.AES.encrypt(password, secretKey)
    return encrypted.toString()
};
export { encryptPassword, decryptPassword };
