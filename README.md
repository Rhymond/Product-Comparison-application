# Product Comparison application

Using **Lumen** to serve the application, and **ReactJS** for the front-end, build a simple product comparison application using the data in the provided.


The initial page load should just display the products in a simple multi-selectable list. Beneath the list, display a comparison section, which will render each of the product details side by side once selected.

When a product is selected from the list it should appear in the comparison section, when it’s unselected it should disappear.

For each product we expect to see:

* Name
* Image (images provided)
* Categories
* Balance Transfer Rates
* Money Transfer Rates
* Purchase Rates
* Additional Info
* More Info Button

## Installation

1. Install dependencies
    
* For Lumen
```bash
cd api && composer install
```

* For React
```bash
cd app && npm install
```

2. Run docker environment

```bash
docker-compose up
```
React application uses port `3000` and can be opened from a browser `http://localhost:3000`

Lumen API can be reached on `http://localhost:80`


Screenshot:

![1](/resources/1.png?raw=true)

## todo
- [ ] Create Live Environment
- [ ] Integrate Redux
- [ ] Unit Tests
- [ ] Acceptance Tests
