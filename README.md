## Technical Test in noissue

The app will display the product and shipping fee in cart, post the order to backend and return the purchased object and disply them in confirmation page.

## Stack

### Frontend

React v17.0.2

Typescript v4.1.2

### Backend

NodeJS 

Express

### Environment

Yarn v1.22.5

Node v14.16.0

### How to run the app locally

1. Make sure yarn and node are installed in local machine.
2. In project root directory, run `yarn build`.
3. After the app is built, run `yarn start`, it will start node server with port 5000.
4. Open the browser, and go to `http://localhost:5000`

### How it works

- In the first page, it will fetch cart data from backend and display the product list and shipping fee.
- When submit is clicked, it will post the cart data to backend, a fake data persistence will be shown as console log in the console, which save each product per supplier.
- After submit is clicked, it shows confirmation page and display order data from backend.
- Click `Continue Shopping` will go back to Cart page.
