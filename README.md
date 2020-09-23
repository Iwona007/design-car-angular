"Design car" prototype application. This part of the application is connected with the backend: 
https://github.com/Iwona007/design-car-angular Please go to the above http address to be able 
to read about what technology was used in the backend. There also are information on how to use 
this application in Java and Spring Boot.

This application has been deployed on heroku: https://design-car-angular.herokuapp.com/home

Please be patient for the Heroku because when application is not in used is sleeping. So that 
mean when users go under address above need to wait a little bit longer for the first time. Moreover 
data from database needs more time to load so please try refresh website till data come up.  

Used technology: 
Angular CLI 8.3.21
Typescript 3.5.3
Bootstrap 4
HTML
CSS

Tests have been conducted via Google Chrome and Mozilla FireFox Browsers. 

This application has been created in order to enjoy designing car. Users can play with different 
attributes such as: Mark, model, color, image and date of production. It is recommended to mix this 
elements e.g: users can edit car with id number 1 and change mark, model, color, image and date for 
these value which he/she would like to receive. In other words they can create an Aston Martin G3 with 
the appearance of a classic, navy-blue Rolls Royce and date of production 1989. And as a result users 
are able to receive his/her car prototype.
 
At first on menu user will see menu according to role or lack of this role. User without any privilege will see  Car Api, Home, 
and opportunity to register or login.  
For admin it will be: Car Api, Home, Car list, Add Car, Edit Car, Admin and LogOut.
For user role it will be: Car Api, Home, Car list, Edit Car, User and LogOut.

If we go to endpoint /home all user are able to see all cars list even if user is not logged in or 
registered. This list show sum up all cars.

Secondly this application has two user already in database: an "Admin" and a "User" with different permission.
For instance user with user role has fewer privilege than admin role however these permissions are the same as admin's.

In this application user is allowed to: 
get all car => endpoints: /list-car.
edit car which has been found by id => endpoints: /edit-car and. After edit car at the button of the page information about edit car
and button "go to list" show. This allow to come back to car list nad see a result. 
Methods for these endpoints are in separated components: add-car.components.ts and edit-car.component.ts
This method/endpoints behave the same for user and admin role. 

Thirdly admin role has wider privilege than user. Additionally, for admin privilege car-list has additional method to delete car based 
on id. Moreover when car is deleted, at the button of the page a new button for refresh page is shown. 
get all car => endpoints: /list-car. 
Also methods for deleteCarById is in add-car.component.ts

Next add car => endpoints: /add-car
Method for those action are also in add-car.component.ts. When cars has been added correctly user is able to see information about this
and button which allow to go to all car list under /list-car endpoints.

Please be aware that "Token" information in admin and user panel is only to show haw the application works. All credential and sensitive
information should be store in a safe place and not be expose on the website. 

Images from tests which I executed are stored in src/assets/img. here I have attached only a couple of them and I invite you to see more
in mentioned folder.  All images have result in developer console.

image for admin profile:
![App_images](src/assets/img/admin_profile.PNG)

image for home:
![App_images](src/assets/img/home.PNG)

images for register validation:
![App_images](src/assets/img/register_error.PNG)

images for login validation:
![App_images](src/assets/img/login_error_pass.PNG)

images for add car method:
![App_images](src/assets/img/admin_add_car.PNG)

images for car list admin view:
![App_images](src/assets/img/admin_carlist.PNG)

images for car list user view:
![App_images](src/assets/img/user_carlist.PNG)

images for edit car validation:

![App_images](src/assets/img/edit_car_validation.PNG)
