import { config } from "config";

export const environment = {
    production: true,
    apiURL: 'http://localhost:82/api',
    imagePath: 'http://localhost:82/',
    loginPage: config.loginPage
};
//export const environment = {
//  production: true,
//    apiURL: 'http://192.168.1.33:90/api',
//    imagePath: 'http://192.168.1.33:90/',
//    loginPage: config.loginPage
//};