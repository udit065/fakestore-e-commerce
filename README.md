# 🛍️ FakeStore

A responsive e-commerce storefront with a product catalog, product pages and a working cart.

**Live demo:** https://fakestore065.netlify.app/

## Features
- Home page with banner, slider, offers, brands, latest products and a newsletter section
- Product catalog loaded from the [Fake Store API](https://fakestoreapi.com), with **category filters**
- **Product details** page
- **Cart** where you can add and remove items and change quantities, using React Context
- Scroll animations with AOS

## Tech stack
React 18 · React Router 6 · Context API · Material UI · Tailwind CSS · Axios · AOS

## Project structure
```
src/
├── pages/         Home, ProductDetails
├── components/    Header, cart (AddToCart, CartItem), FilterProducts, home page sections
└── contexts/      ProductContext (catalog), CartContext (cart state)
```

## Run locally
```bash
npm install
npm start      # http://localhost:3000
npm run build  # production build
```

## Author
**Udit Yadav** · [GitHub](https://github.com/udit065) · [LinkedIn](https://www.linkedin.com/in/udit-yadav065)
