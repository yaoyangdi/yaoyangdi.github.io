# flash-sale-system

Definition:

One typical scenario of flash sale system can be the activities with limited time to encourage customers to make a impulse buys in order to make their best budget of the season/year. E.g. Brand XXX discounted its products by 60% within one days.

## Scenario

The scenario involves a retailer providing customers with limited chances to purchase limited edition sneakers.

It comes with the following **characteristics**:

- Large number of users come to the system at the same time, causing a spike in traffic.
- Number of ordering request is much larger than inventory size.

## Challenges

- **Avoid inventory from being oversold or undersold.**
- **Provide high throughput to handle high traffic and high concurrency.** There will be many concurrent read and write to the limited inventory records. It can be considered challenging since Databases have limited QPS. 
- **Other service works normally**. Ensure that the system will not be hung up under high concurrent requests and cannot affect other services.

## System Design







## Frontend Features

Register a new account and the data validation

![image-20220731234630606](images/image-20220731234630606.png)