## Project Name & Pitch

iWitness 

An application used to create and publish articles for a wide readership, built with React, Redux, JavaScript, and CSS.

## Project Status

(WIP)-This project is currently in development. Users can get authenticated by registering an account and signing up, the can view their profile page and make edit to their information, they can also log out and explore publication category page. profile page accessibility happens only when they are signed in to their account, The password recovery functionality also works perfectly too. Functionalities to enable publication creation, gain access to market place for articles and request publishing house is in progress.

## Project Screen Shot(s)
A more extensive version of this application can be found here (https://github.com/codetipster/iwitness-frontend)-both versions are being developed concurrently.
![Architecture](http://Users/snzekwe/Desktop/Helsinki/mediacom/src/assets/jpg/Screenshot 2022-05-02 at 15.01.42.png)


## Installation and Setup Instructions 

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  
 
To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  In development environment
``  hosted version on netlify

## Reflection

  - What have you worked on? 
  - What did you set out to build?
  - Why was this project challenging and therefore a really good learning experience?
  - What were some unexpected obstacles?
  - What tools did you use to implement this project?
 

This was a semester long project built during my Frontend Engineering module at CODE. The Project goals included using technologies with special interest on Frontend technologies like React which i have learned up until this point and familiarized myself with its concepts. As an official code project, i worked in a team with two other students who focused exclusively on the backend for this interface. 

Originally We wanted to build an application that allowed users to create account to the platform, write publications or contents and decide if they share their articles for a paid viewership or under the free tier-public. 

One of the main challenges I ran into as the lead frontend engineer on this project was in Authentication and ofcourse CSS(Lol). This lead me to spend a few days on a research spike into OAuth, Auth0, and two-factor authentication using Firebase or other third party provider stacks, eventually i solved this.

At the end of the day, the technologies implemented in this project are React, React-Router 6.3, git and github, Redux,React-toastify , and a significant amount of VanillaJS, JSX, and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the other iteration of this project(https://github.com/codetipster/iwitness-frontend), which i am equally developing in concurrence with this one, i have decided to handroll most of the things i achieved with react-toastify and firebase here manually on my own and even though it has proven to be a lot tougher than i originally anticipated, i am willing to keep working at it regardless of the challenges.