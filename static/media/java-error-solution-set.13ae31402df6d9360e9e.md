## 406 Http error: Could not find acceptable representation

`{"timestamp":"2022-08-07T13:33:06.885+00:00","status":406,"error":"Not Acceptable",.... }`

### Solution([***Reference***](https://blog.csdn.net/weixin_42215286/article/details/124230388?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2-124230388-blog-84684481.pc_relevant_multi_platform_whitelistv3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2-124230388-blog-84684481.pc_relevant_multi_platform_whitelistv3&utm_relevant_index=4))
>
> Didn't set getter and setter on the return data type.
>
> ![image-20220807233538624](images/image-20220807233538624.png)
>
> 

------



## Illegal attempt to map a non collection as a @OneToMany, @ManyToMany or @CollectionOfElements

`Caused by: org.hibernate.AnnotationException: Illegal attempt to map a non collection as a @OneToMany, @ManyToMany or @CollectionOfElements: com.example.flashsales.model.User.cart_product`

### Solution

![image-20220808052143627](images/image-20220808052114649.png)
