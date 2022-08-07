Java-basic

#### Application file

`@SpringBootApplication` which is a combination of the following more specific spring annotations -

- [`@Configuration`](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/context/annotation/Configuration.html) : Any class annotated with `@Configuration` annotation is bootstrapped by Spring and is also considered as a source of other bean definitions.

- [`@EnableAutoConfiguration`](https://docs.spring.io/spring-boot/docs/1.2.1.RELEASE/api/org/springframework/boot/autoconfigure/EnableAutoConfiguration.html) : This annotation tells Spring to automatically configure your application based on the dependencies that you have added in the `pom.xml` file.

  For example, If `spring-data-jpa` or `spring-jdbc` is in the classpath, then it automatically tries to configure a `DataSource` by reading the database properties from `application.properties` file.

- [`@ComponentScan`](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/context/annotation/ComponentScan.html) : It tells Spring to scan and bootstrap other components defined in the current package (com.example.easynotes) and all the sub-packages.



`main()` method calls Spring Boot’s `SpringApplication.run()` method to launch the application.

#### JPA Entity definition

`@GeneratedValue(strategy = ... )` : Provides for the specification of generation strategies for the values of primary keys

- GenerationType.**IDENTITY** : Indicates that the persistence provider must assign primary keys for the entity using a database identity column.
- GenerationType.**SEQUENCE** : Indicates that the persistence provider must assign primary keys for the entity using a database sequence.
- GenerationType.**TABLE** : Indicates that the persistence provider must assign primary keys for the entity using an underlying database table to ensure uniqueness.
- GenerationType.**AUTO** : If you use AUTO, Hibernate will choose one of the strategies to generate your id

> Note one of the differences between AUTO and IDENTITY: IDENTITY set *autoincrement* of primary key by default while AUTO will not (scenario when primary key as string would cause error).

  

## File Structure

- **resources/static** - `contains` ***static resources*** such as css, js and images.
- **resources/templates** - contains server-side templates which are rendered by Spring. *(HTML template)*
- **resources/application.properties** - This file is very important. It contains **application-wide** properties. Spring reads the properties defined in this file to configure your application.  **e.g.** You can define server’s default port, server’s context path, database URLs etc, in this file.
- **DemoApplicationTests** - Define unit and integration tests here.

- **pom.xml** - contains all the project dependencies.

