> During the learning of the FIT3077 unit, we basically built a simple authentication system interface using `Thymeleaf + Spring Boot` and connected the UI with the API provided by the teaching team. I had grabbed a understanding on the general flow of authentication and handling based on API response.
>
> This experience piqued my curiosity about how API implement authentication and I've recently been thinking about how to make my e-commerce project recognize users for individual actions like adding item to cart. So this blog aims to implement authentication token on the server side so that each API will validate the token before serving.

### Token and User entity creation in JPA

```java
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

    @OneToOne( cascade=CascadeType.ALL)
    @JoinColumn(nullable = false, name = "user_id")
    private User user;

```

> Note that when primary key is string formatted, we need to specify the anotation @GenericGenerator(name="system-uuid", strategy = "uuid") and strategy = GenerationType.**AUTO** since string data not allows auto increment.



### Create the token in service method

```java
// create the token
final AuthenticationToken authenticationToken = new AuthenticationToken(new_user);
tokenService.saveConfirmationToken(authenticationToken); // repository save()
```

We then now bind the user instance with the newly created AutenticationToken instance to create relationship between them.



