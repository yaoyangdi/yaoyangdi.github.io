> 
>
> During the learning of the FIT3077 unit, we basically built a simple authentication system interface using `Thymeleaf + Spring Boot` and connected the UI with the API provided by the teaching team. I had grabbed a understanding on the general flow of authentication and handling based on API response.
>
> This experience piqued my curiosity about how API implement authentication and I've recently been thinking about how to make my e-commerce project recognize users for individual actions like adding item to cart. So this blog aims to implement authentication token on the server side so that each API will validate the token before serving.

### Token and User entity creation in JPA

```java
// Token entity
@Entity
@Data
@Table(name = "TOKENS")
@NoArgsConstructor
public class AuthenticationToken {
    /*	Constructor	 */
    public AuthenticationToken(User user) {
        this.user = user;
        this.created_date = new Date();
        this.token = UUID.randomUUID().toString();
    }
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    @Column(name = "token_id")
    private String token;
    
    @Column(name = "created_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date created_date;

    // One-to-One Relationship
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(nullable = false, name = "user_id")
    private User user;
}


// User entity
@Entity
@Data
@Table(name="USERS")
@NoArgsConstructor
public class User {
    public User(String username, String firstname, String lastname, String email, String password) {
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }
/* Other attributes
...
...
*/
    @JsonIgnore
    @OneToOne(mappedBy = "user")
    private AuthenticationToken token;
   }

```

> Note that when primary key is string formatted, we need to specify the anotation @GenericGenerator(name="system-uuid", strategy = "uuid") and strategy = GenerationType.**AUTO** since string data not allows auto increment.

### Token Service Implementation

First we define the structure of token service class and now it can serve for token creation purpose.

```Java
@Service
public class TokenService {
    @Autowired
    TokenRepository tokenRepository;

    /**
     * Service used for creating a token on the database
     */
    @Override
    public void saveConfirmationToken(AuthenticationToken authenticationToken) {
        tokenRepository.save(authenticationToken);
    }
```

### Create the token in the User signup service method

```java
// create the token
final AuthenticationToken authenticationToken = new AuthenticationToken(new_user);
tokenService.saveConfirmationToken(authenticationToken); // repository save()
```

We then now bind the user instance with the newly created AutenticationToken instance to create relationship between them.



### Validate token before serving

Inside the `TokenService class `  (mentioned above), 

1. we firstly defien a method named  `getToken`, which is used to check if there is a user in the database who has this token.
2. Then define `authenticate` & `getUser` methods, given the token return from `getToken` as parameter, which are used  for validation.
3. We then validate each token from subsequent requests. The code snippet shows in `CartController.java`  and `UserService.java` are the implementations of validation in **add to cart** and **LogIn** scenarios.

*TokenService.java*

```Java
    /**
     * Service used for retrieving a token by given user instance
     * If the user is not present in db. then return null
     */
    @Override
    public AuthenticationToken getToken(User user) {
        return tokenRepository.findByUser(user);
    }


    /**
     * Service used for validating the token
     * Validation includes NULL check & subsequent User NULL check
     */
    @Override
    public void authenticate(String token) throws AuthenticationFailException{
        // null check
        if (Objects.isNull(token)) {
            throw new AuthenticationFailException("Token not present");
        }
        if (Objects.isNull(getUser(token))) {
            throw new AuthenticationFailException("Token not valid");
        }
    }
    // Invoked inside authenticate() method
    public User getUser(String token) {
        // Validate the token
        AuthenticationToken authenticationToken = tokenRepository.findByToken(token);
        if (Objects.isNull(authenticationToken)) {
            throw new AuthenticationFailException("Token not present");
        }
        return authenticationToken.getUser();
    }
}

```

*CartController.java*

```Java
    @PostMapping
    public ResponseEntity<ApiResponse> addToCart(@RequestBody AddToCartDto addToCartDto, @RequestParam("token") String token) {
        // authenticate the token
        tokenService.authenticate(token);
        // find the user
        User user = tokenService.getUser(token);
        cartService.addToCart(addToCartDto, user);
        return new ResponseEntity<>(new ApiResponse(true, "Added to cart"), HttpStatus.CREATED);
    }

```

*UserService.java*

```java
// hash the password and compare the password in DB
if (user.getPassword().equals(inputHash)){
    // if password match then retrieve the token
    AuthenticationToken token = tokenService.getToken(user);

    // validate the token (if the user doesn't have the token, meaning the user is not authenticated
    if (Objects.isNull(token)) {
        throw new CustomException("token not exist");
    }
    return new SignInResponseDto("success", token.getToken());
    
} 
else {
    throw new CustomException("password not matched");
  }
```
