# single-cookies
## description
----- Reasons for choosing single merge -----
1. single-xxx series plugin each plugin does only one thing
2. the plugin size is less than 1k
3. Provides a complete set of methods for editing cookies
4. High configuration policy

## methods
1. getCookie -- The method to obtain the cookie according to the key
   1. input parameter: key: string -- cookies key
2. deleteCookie -- Delete the specified cookie according to the key
   1. input parameter: key: string -- cookies key
3. clearCookie -- delete all cookies
4. editCookie -- Method of editing cookie
   1. input parameter: key: string -- cookies key
   2. input parameter: value: string -- cookies value
   3. According to the key, you can modify it directly if it exists; otherwise, you can add it directly
## example for
```
example1:
const {getCookie} = require('single-cookies')
const value = getCookie('name')

example2:
const {deleteCookie} = require('single-cookies')
deleteCookie('name')

example3:
const {editCookie} = require('single-cookies')
editCookie('name', 'lihh')
```
## install
```
npm install single-cookies --save
yarn add single-cookies --save
```
## contact me
[GitHub](https://github.com/a572251465/single-cookies)