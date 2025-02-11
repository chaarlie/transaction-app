## Hi there!

This is a working example of how to combine React, NestJS, and Typescript to perform CRUD operations on a Transaction domain.

## Running in development

1. Make sure to have a Postgres connection ready
1. Create a `.env` file based on the `.env.example` in both the **transaction-api** and **transaction-webapp** directories
1. To run the api locally run `npm run start:dev` in its directory
1. To run the web application locally just `npm run dev` in its directory
1. In the browser just go to default [localhost](http://localhost:5173)


## Running in production

1. Make sure to have a Postgres connection ready
1. Create a `.env` file based on the `.env.example` in both the **transaction-api** and **transaction-webapp** directories
1. First run `npm build` in its directory and use the **./dist** folder
1. To run the web application locally just `npm run build`and use the **./dist** folder


