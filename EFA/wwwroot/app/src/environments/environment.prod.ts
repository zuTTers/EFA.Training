import { config } from "config";

export const environment = {
    production: true,
    apiURL: 'http://192.168.1.102:91/api',
    imagePath: 'http://192.168.1.102:91/',
    loginPage: config.loginPage
};
//export const environment = {
//  production: true,
//    apiURL: 'http://192.168.1.180:93/api',
//    imagePath: 'http://192.168.1.180:93/',
//    loginPage: config.loginPage
//};