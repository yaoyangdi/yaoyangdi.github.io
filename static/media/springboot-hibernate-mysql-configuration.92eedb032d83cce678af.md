springboot-hibernate-mysql-configuration

```properties
spring.jpa.hibernate.ddl-auto = update
```

`spring.jpa.hibernate.ddl-auto` is used for database initialization. 

- the value **“update”** for this property does two things when it is for <u>development</u>
  1. When you define a domain model, a table will automatically be created in the database and the fields of the domain model will be mapped to the corresponding columns in the table. (定义模型后会自动创建表，fields也会自动映射到表中的列)
  2. Any change to the <u>domain model</u> will trigger an update to the table. **E.g.** change on name or field type will be reflected in the mapped table as well.  (自动更新任何变化)
- the value **“validate”** for this property when it is for <u>product</u>.

##### database migration tool： Flyway





```java
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, allowGetters = true)
```

**`@JsonIgnoreProperties`** annotation is a Jackson annotation. Spring Boot uses Jackson for Serializing and Deserializing Java objects to and from JSON.





Get fields automatically populated whenever we create or update an entity



1. Add Spring Data JPA's AuditingEntityListener to the domain model

```java
@EntityListeners(AuditingEntityListener.class)
```

2. Enable JPA Auditing in the main application

```java
@SpringBootApplication
@EnableJpaAuditing
public class EasyNotesApplication {

    public static void main(String[] args) {
        SpringApplication.run(EasyNotesApplication.class, args);
    }
}
```





## Creating NoteRepository to access data from the database

- repository folder
- NoteRepository class file

some resource: [SimpleJpaRepository’s documentation](http://docs.spring.io/autorepo/docs/spring-data-jpa/current/api/org/springframework/data/jpa/repository/support/SimpleJpaRepository.html)

```java
@Repository
public interface NoteRepository extends JpaRepository<Note, Long> {

}
```

- 

```java
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "post_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Post post;
```

#### what is the entity fetching strategy

The strategy by default is, the JPA @ManyToOne and @OneToOne annotations are fetched EAGERly, 

while the @OneToMany and @ManyToMany relationships are considered LAZY.

- For children associations, it’s always safer to mark them <u>LAZY</u> and only “join fetch” them when needed, because those can easily generate large SQL result sets, with unneeded joins.





new raffle

