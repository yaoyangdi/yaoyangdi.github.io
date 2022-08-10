## How token is used

1️⃣  **Login In**: Once validated, the server generates a token.

2️⃣  **Web client side**: The client includes the token in the HTTP header of subsequent requests and then sent each request to the backend server.

3️⃣ **Server side**: The server validate the token before proceed each request.



## **Token Authentication**

A random string (a token) is generated for each specific user. 

◾️ On the back end side, the token will be validated by **checking the database** on each request. 

◾️ On the front end side, it will be included in the HTTP auth header on each sequent request.

#### Pros

◾️ The simplest form among authentication that keeps the user's credentials secure.

◾️ Can be revoked to force user to re-authenticate. 

#### Cons

Database is hit at least once for every request, that means it could cause an issue for database to handle large volumes (100k+) requests in a short space of time.



## **JSON Web Tokens (JWT)**

Instead of database checks, JWT uses encryption and hashing techniques to validate the token.

#### Pros

The benefit of JWT is that it is more scalable, because it requires less database hits. 

#### Cons

it’s more complicated to implement.



## Summary

Token authentication is more suitable for simple auth system.

JSON Web Tokens (JWT) is more suitable for implementing system that anticipates lots of traffic.



---

Resource: 

[https://londonappdeveloper.com/json-web-tokens-vs-token-authentication/](https://londonappdeveloper.com/json-web-tokens-vs-token-authentication/)