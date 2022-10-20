# Brett's Cat Wiki :smiley_cat:

This is Brett Orr's coding test for Blowfish Games!

Access it here: https://catwiki-brettorr.herokuapp.com

## Tech Details

Here are the features of my coding test:

-   Uplifted server to Typescript
-   Jest unit testing (admittedly it's pretty basic)
-   Interface models generated from the cat api payloads
-   .env environment variables in case API changed per env
-   Custom error throwing on the server
-   Uplifted client to Typescript
-   Using Routing in client
-   Using react hooks and effects
-   Using bootstrap with a free template for theming
-   Prettier to enforce code cleanliness and presentation
-   Frontend error handling if the user modifies the URL to select a breed that does not exist
-   Loading animations for breed page

## Functions

My application can do the following:

-   List of cat breeds
-   See details of a cat breed
-   See images of that cat's breed

## Known Issues

Here are some of the things I would like to improve with more time:

-   The compilation of the server is pretty ugly, it all gets shoved into one dist folder
-   Pagination of cat images
-   Better server logging of requests and errors using a logging lib
-   Replace default route home page with a proper 404 page
-   Caching the breeds list with a singleton or storage
