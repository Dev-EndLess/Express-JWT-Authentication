# Express Tutorial - User Password Authentication

### This Tutorial Use: 

## cookie-parser Package
### https://www.npmjs.com/package/cookie-parser
## dotenv Package
### https://www.npmjs.com/package/dotenv
## jsonwebtoken Package
### https://www.npmjs.com/package/jsonwebtoken


<ol>
  <li>Creating JWT tokens at authorization
  <li>Creating JWT verification middleware
  <li>Applying JWT token verification to many routes
  <li>Adding cookie-parser middleware
  <li>Create a refresh token controller
  <li>Creating a logout controller

**info**
In frontend if you use fetch you need include a credentials options or
the browser will send and error.
origin has beeen blocked by CORS. The value of the 'Access-Control-Allow-Credentials' header in the response is ''
so we fix the problem by adding some credentials(check files in folders) 

Adding also options for cookies:
{ httpOnly: true, sameSite: 'None' secure: true }



