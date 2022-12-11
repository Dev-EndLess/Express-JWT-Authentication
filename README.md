# Express Tutorial - JWT (Jason Web Token)

<p> We learn how to apply JWT Authentication to your Express REST API routes in the most secure way possible to avoid XSS and CSRF attacks. This beginners tutorial will help you apply JSON Web Tokens to your REST API built with Node.js and Express. <p>

### JWT References

🚀 Intro to JSON Web Tokens: https://jwt.io/introduction

🚀 All You Need to Know About Storing JWT in the Frontend: https://dev.to/cotter/localstorage-vs-cookies-all-you-need-to-know-about-storing-jwt-tokens-securely-in-the-front-end-15id

🚀 NPM jsonwebtoken packages: https://www.npmjs.com/package/jsonwebtoken

🚀 NPM cookie-parser package: https://www.npmjs.com/package/cookie-parser

🚀 Deleting Cookies: https://expressjs.com/en/api.html#res.clearCookie

🚀 Cross-Site Scripting (XSS): https://owasp.org/www-community/attacks/xss/

🚀 Cross-Site Request Forgery (CSRF): https://owasp.org/www-community/attacks/csrf

🚀 REST Security Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html

## Some stuff about this repo

- Creating JWT tokens at authorization
- Creating JWT verification middleware
- Applying JWT token verification to many routes
- Adding cookie-parser middleware
- Create a refresh token controller
- Creating a logout controller

### Login References

🚀 Bcrypt: https://www.npmjs.com/package/bcrypt

🚀 How to Safely Store a Password: https://codahale.com/how-to-safely-store-a-password/

🚀 MDN: HTTP Response Status Codes: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status


#### info...

In frontend if you use fetch you need include a credentials options or
the browser will send and error.
origin has beeen blocked by CORS. The value of the 'Access-Control-Allow-Credentials' header in the response is ''
so we fix the problem by adding some credentials(check files in folders) 

Adding also options for cookies:
{ httpOnly: true, sameSite: 'None' secure: true }



