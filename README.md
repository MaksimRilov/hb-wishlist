## How to run it?

1. run `npm install`
2. run `npm run start`

## A few words about the project

* About JSON file. I wrote a small script `src\utils\generateProducts.js`. I used **faker** library for mock data.
To run the script you need installed **node**. After this you need to run the command `node generateProducts.js`

* About UX. There are two problems because of which I would not do such implementation:
  1. The first is working with a large list. We don't need to show the whole list at once. We need to use pagination and we can also use virtualization if it is necessary.
  2. The second reason is the transition to the detailed page about the product in the **same tab**. As a user I would like to save the scroll position. Now it is lost. The solution to this problem is to open a **new tab** with detailed information about the product.

* About the state manager. I adhere to the YAGNI (You ain't gonna need it) principle. I think the application should be as simple as possible. Especially the client part of the application, which changes much more often and faster than the core of the application. Therefore, I would not use any state manager until it was really necessary.

* Also I left some comments in the code.

## Troubleshooting
There are several problems that I did not fix. Because they **wouldn't exist with a real server**.
  1. We cannot open a detailed page about a product via a direct link. First you should always visit the page with a list of all products.
  2. We cannot reload the page with detailed information about the product.