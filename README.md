# Blood Alley Tours

## What is it?

The project was built for Blood Alley Tours, a new company offeing walking tours in the Gastown neighbourhood of Vancouver, British Columbia. They requested for a simply designed booking site.

It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and the back end is built on a seperate repository called "[blood_alley_tours_api](https://github.com/ryo-soren/blood_alley_tours_api)". 

The two projects are to be run at the same time.

## What does it do?

The site has the ability for potential customers to both book and pay for a walking tour, as well as reaching out to the Blood Alley Tours team for any general inquiries. Upon booking, customers get an email with the details of their booking.

## Notable Features

* Used React’s state feature to separate the customer form and info review page, before making payments 
* Implemented Stripe payment processing in both the frontend and backend to ensure proper encryption 
* Manipulated React’s calendar component to exclude all weekdays except Fridays and the current date, for customers looking to book a tour
* Active-Mailer gem is being used to handle email communication with customers, on all new booking as well as for general inquiries

## How is it build?

* Front-End: React.js
* Back-End: Ruby on Rails API, Active-Mailer
* Database: PostgreSQL
* Dependencies:
  * "date-fns": "^2.29.3",
  * "moment": "^2.29.4",
  * "react-datepicker": "^4.8.0",
  * "react-phone-number-input": "^3.2.13",

## Clone the repository

Follow the steps in [this link](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) to clone the repository

## Set up the project for development

### `npm install`

Installs all dependencies required for the projects full functionality

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5500](http://localhost:5500) to view it in your browser.