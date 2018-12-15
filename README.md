# goodBoye

An ad block extension that replaces consumer ads with animal adoption ads. Based on CatBlock.

goodBoye's API provides lesser-known pet shelters with a platform to upload information and links about adoptive pets. This information is used to compose ads, which are then fed to the ad block extension.

Screenshot illustrating ad block (with test data): https://i.imgur.com/dAUXJUq.png 

Landing page: https://lit-refuge-77106.herokuapp.com/

## Implementation

* Cloudinary for hosting pet images
* Jimp for modifying images, resizing and adding text
* MySQL database for storing data on shelters and adoptive pets
* CatBlock forked and modified to replace consumer ads with adoption ads from our database
* Bulma framework for UI components on landing page

## Installation

goodBoye is a prototype. To build the extension for personal use, clone the **gb-extension** repository and then [follow these instructions](https://github.com/CatBlock/catblock/wiki/Building-the-extension).

## Technologies

* [CatBlock](https://github.com/CatBlock)
* [Cloudinary](https://cloudinary.com/documentation/node_integration)
* [Jimp](https://www.npmjs.com/package/jimp)
* [Express](https://expressjs.com/)
* [Sequelize](https://docs.sequelizejs.com/)
* [MySQL](https://www.mysql.com/)
* [Bulma](https://bulma.io/)
