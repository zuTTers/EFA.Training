import { config } from "config";

export const environment = {
    production: true,
    apiURL: 'https://globalparfum.com/api',
    imagePath: 'https://globalparfum.com/',
    loginPage: config.loginPage
};
//export const environment = {
//  production: true,
//    apiURL: 'https://192.168.1.180:93/api',
//    imagePath: 'https://192.168.1.180:93/',
//    loginPage: config.loginPage
//};