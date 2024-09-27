# Gammazon - Product Display Component
Gammazon is an Amazon Product Page replica. This component consists of the main product display of Gammazon.

## In Action
![Display](./display.gif)
  
## Table of Contents
1. [UserStories](#userstories)
2. [Stack](#stack)
3. [GetStarted](#getstarted)
4. [Reflections](#reflections)
6. [Contributors](#contributors)
7. [RelatedProjects](#relatedprojects)

# UserStories

## Implemented
- As a user, I want to see a main display of the product, as well as other product images in a series of thumbnails.
- As a user, I want to be able to hover over the main display to project a zoomed projection of the product image.
- As a user, I want to be able to hover over a thumbnail image to display the targeted image on the main display.

## Coming Soon
- As a user, I want my mouse movement on the main display to project a further zoomed portion of the image that moves with the mouse.

# Stack

<table>
  <tr>
  </tr>
  <tr>
    <td align="center">Front-end</td>
    <td align="center">Back-end</td>
    <td align="center">Deployment</td>
  </tr>
  <tr>
    <td align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React" title="React" width="80px"/></td>
    <td align="center"><img src="https://www.brandeps.com/logo-download/N/Node-JS-logo-vector-01.svg" alt="Node.js" title="Node.js" width="80px"/></td>
    <td align="center"><img src="https://miro.medium.com/max/736/1*Fd6rk1k1FHPZcg4aK_OXtQ.png" alt="AWS Elastic Beanstalk" title="AWS Elastic Beanstalk" width="80px"/></td>
  </tr>
  <tr>
    <td align="center"></td>
    <td align="center"><img src="https://buttercms.com/static/images/tech_banners/ExpressJS.png" alt="Express" title="Express" width="60px"/></td>
    <td align="center"><img src="https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png" alt="Docker" title="Docker" width="80px"/></td>
  </tr>
  <tr>
  <td align="center"></td>
    <td align="center"><img src="https://seeklogo.net/wp-content/uploads/2012/03/mysql-vector1.jpg" alt="MySQL" title="MySQL" width="80px"/></td>
    <td align="center"><img src="https://i2.wp.com/sysadminxpert.com/wp-content/uploads/2017/09/rds-logo.jpg?fit=313%2C200&ssl=1" alt="AWS-RDS" title="AWS-RDS" width="80px"/></td>
  </tr>
  <tr>
  <td align="center"></td>
    <td align="center"><img src="https://i0.wp.com/codeandcoffee.us/wp-content/uploads/2018/07/s3.png?fit=387%2C375" alt="AWS-S3" title="AWS-S3" width="80px"/></td>
    <td align="center"></td>
  </tr>
</table>

## Front-End
The product display microservice utilized ReactJS on the front-end.

## Back-End 
Product information was stored in a MySQL database. Express RESTful APIs are used to enter and retrieve data. Product images were stored in AWS S3.

## Deployment
Docker images were generated to deploy the microservice on AWS Elastic Beanstalk. The MySQL database for the component was hosted on AWS RDS.

* This microservice is not currently deployed

## Requirements
- Node 6.13.0
- etc

# GetStarted
Take the following steps to run the app in your localhost, you will need to have the following:
- A MySQL database must be set up, and the appropriate credentials must be added to the config.js file.

From terminal in the index folder:
```
npm install
npm start
npm run react-dev
```

# Reflections

## Challenges
This project was focused on exercising my front-end skills with raw CSS. As part of a team of 5, the end product was for the full-stack product display microservice to be incorporated into a proxy server and deployed to complete the Gammazon product page.

## Learnings
I was able to hone my competency with CSS FlexBox, and soldified my grasp on ReactJS. Furthermore, I learned to deploy my microservice and proxyserver using a combination of Docker and AWS Elastic Beanstalk. Multiple AWS services including S3 and RDS were learned to implement the app.

## Contributors
- [Benjamin Hong](https://github.com/bhong35): Carousel and Display
- [Kytra Murphree](https://github.com/KytraScript): Shopping Cart
- [Sam Lawson](https://github.com/samlawson355): Product Description
- [Tim Sanderson](https://github.com/timsand): Reviews
- [Matt Lucas](https://github.com/mlucas24): Top and Bottom Bar

## RelatedProjects
  - https://github.com/Gammazon/feature-carousel
  - https://github.com/Gammazon/feature-display
  - https://github.com/Gammazon/Feature-Bottom-bar
  - https://github.com/Gammazon/Feature-Top-Bar
  - https://github.com/Gammazon/product-description
  - https://github.com/Gammazon/featureReviews
  - https://github.com/Gammazon/BenProxy