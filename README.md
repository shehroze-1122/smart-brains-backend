# Smart Brains
## Description
[Smart Brain](https://smart-brains-0.herokuapp.com/) is full stack app with Client side created using `ReactJs` which you can find [here](https://github.com/shehroze-1122/smart-brains-frontend) and Server side is powered using `NodeJs` and I used `PostgreSql` serving as a database. This application
is fully optimized with security being handled carefully.

The app has a **Sign In** and **Register** form as you open the link to it, where you can register if you haven't already and then it welcomes the user with a cool UI and takes care of the UX too. Users can enter the url of any image containing any number of humans. 
Then the magic happens and the SMART BRAIN will **create red boxes around every face** in the image. It also displays the number of entries.

The app hits clarifai api with your entered image URL and then responds with the coordinates for the bounding boxes which we then tackle to create the actual boxes on the image.

This repository is dedicated to the **server side**.

## Components:

## Sign In and Register

![Sign In form](https://github.com/shehroze-1122/smart-brains-frontend/blob/main/Readme%20Images/SignIn.PNG)


## Home

![Home page](https://github.com/shehroze-1122/smart-brains-frontend/blob/main/Readme%20Images/Home.PNG)


## Profile

You can view your profile and also you have the option of changing your username

![Profile](https://github.com/shehroze-1122/smart-brains-frontend/blob/main/Readme%20Images/Profile.PNG)


## Image Link

To test this app with a image, you would need a image link which can be copied on google by just right clicking on any image you would like and then hit `Copy Image Link`

![Image Link](https://github.com/shehroze-1122/smart-brains-frontend/blob/main/Readme%20Images/imageLink.png)


## Face Detection

Now just copy the link to the searchfield on **Smart Brain** and hit Detect! And here you have it!

![Face detection](https://github.com/shehroze-1122/smart-brains-frontend/blob/main/Readme%20Images/Face%20Detection.PNG)


Feel free to point to any issues or contribute to it.
