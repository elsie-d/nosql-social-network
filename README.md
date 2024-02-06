# SOCIAL NETWORK API - NOSQL
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)


    
## Description
This project is an API for a social network app whose data is structured in a non-relational database, in this case Mogoose. 
            
## Table of Contents
            
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributions)
- [Tests](#tests)

- [License](#license)
        
- [Questions](#questions)
            
## Installation
Node.js +  
Express 
Mongoose
            
## Usage
Once all installations are complete, the user should be able to test the app with any API testing tool such as Insomnia. 

The app is configured so that the user is able to make CRUD calls on two different models, `User` & `Thought`. Additionally the `Thought` model refrences a subdocument `reactionsSchema` which allows for users to resond to other users thoughs with their own reactin. Last but not least, there is a virtual created for `User` to keep track of how many friends they have.   

Check out the [demo here](https://drive.google.com/file/d/15Q_A3Wdni4WWk7aWKqtmz39_mi4hhTau/view) to see an example of the api calls the application is set up to accept. 
            
## Contributions
Please reach out me, the owner of the app to contribute with additional developments.
        
            
## License
ISC
            
            
## Questions?
Find me on GitHub: <a href="https://github.com/elsie-d" target="_blank">elsie-d</a>
            
OR
            
Email me at: <a href="mailto:elsie.dh@gmail.com" target="_blank">elsie.dh@gmail.com</a>