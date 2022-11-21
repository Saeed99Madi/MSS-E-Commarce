# [MSS]()
## **The Problem** :no_entry: 
- When there is a seller who somehow wants to publish and display his own products, in a private and secure way, especially if the products have great information, details and classifications, and the buyer needs to be well acquainted with the products before he buys them.

## **The solution** :bulb: 
- We created a website similar to e-commerce websites. that showed Products in the WebSite in a creative way, the WebSite Provided of communication way to the saller in direct way, And Provided of Dashboard for the saller to manage in his Store.

## **User Stories**  :book: 
### Custmer who Visit Store
- As a Custmer, I want to see products in categorized, easy & understandable way.
- As a Custmer, I want to see product details and moving to related products in easy way.
- As a Custmer, I want to be able to add & remove products i care, to/from my cart.
- As a Custmer, I want to be able to saller in general or by take my cart info.

### Saller who Own the Store
- As a Saller, I want to be able to add, edit, delete & show products.
- As a Saller, I want to be able to add, edit, delete & show products Attriputes.
- As a Saller, I want to be able to add, edit, delete & show slider products.
- As a Saller, I want to be able to add, edit, delete & show categories with subcategories.
- As a Saller, I want to be able to add, edit, delete & show Store Settings .
- As a Saller, I want to be able to add, edit, delete & show users can manage my store.
- As a Saller, I want to be able to add, edit Admin Info.

## **Prototype**

[Dashboard Prototype](https://www.figma.com/file/jMM3JqqxqMw90P7Xau6vmO/3me-Jamal-Dashboard?node-id=0%3A1&t=1vg9StpNOpTXAoRE-1)
## **SQL Scheme**
![](https://i.imgur.com/LEc2X2f.png)


## **How to Launch App Locally** :-

*  clone this repo by typing this command in the terminal:  
`git clone https://github.com/Saeed99Madi/MSS-E-Commarce`

*  Run `npm i` to install the packages for the app as well as the client side packages.



### Database Setup  :clipboard:

make sure you have installed PostgreSQL and pgcli - if you're working on linux

```sql=
CREATE DATABASE {database name};
CREATE USER {user name} WITH superuser password {password}
ALTER DATABASE {database name} OWNER TO {user name};
```
- Test DB:
- Do the same as before but make sure to change the names.

* Run the following command in terminal to build your database directly after adding it in your environment variables

`npm run buildDB`


### **Environment variables:**
Environment variables are one of the ways we keep our product safe. If you want to access our app locally you will need to add your own.
- create .env file
- add your Environment variables
```sh
DEV_DB_URL= # Your development PostgreSQL connect
DATABASE_URL= # Your production PostgreSQL connect
SECRET_TOKEN= # Your token Secret key
```
- add your client side Environment variable
```sh 
REACT_APP_BASE_URL=http://localhost:8080/api/v1/
```

### Start the App :electric_plug:

To start the App Locally you can start the server First then start client-side or vice versa!
> To run Server, In your terminal Type: 

`npm run dev` 
then you should be able to go to (http://localhost:8080/) 
> To run client-side, In your terminal Type:    

`cd client` => `npm start` 
    then you will be able to run (http://localhost:3000/) 

Now you can view the app live in the Browser!

## **Technologies** :computer: :-

- BackEnd: **Node JS & Express JS**
- FrontEnd: **React JS**
- Middlewares: **Axios**
- Database: **PostgreSQL**
- ORM library: **Sequalize**
- Libraries: **Material UI**


## **Team Members** 

- [Said Madi](https://github.com/Saeed99Madi)
- [Nada S Ayesh](https://github.com/nadasuhailAyesh12)

## **Resources** 

- [Node Js](https://nodejs.org/en/)
- [React Js](https://reactjs.org/)
- [Express](http://expressjs.com/)
- [Material UI](https://mui.com/)


