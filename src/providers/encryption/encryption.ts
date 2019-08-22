
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
/*
  Generated class for the EncryptionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EncryptionProvider {

  key = CryptoJS.enc.Utf8.parse('1112225552445461');
    iv = CryptoJS.enc.Utf8.parse('1112225552445461');

    encrypt(plainText:string): string {
        var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(plainText), this.key,
          {
            keySize: 128 / 8,
            iv: this.iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
          });
    
          return encrypted.toString();
      }


      decrypt(cipherText: string): string{
        var decrypted = CryptoJS.AES.decrypt( cipherText, this.key, {
          keySize: 128 / 8,
          iv: this.iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
        });
    
        return decrypted.toString(CryptoJS.enc.Utf8);
      }

}
