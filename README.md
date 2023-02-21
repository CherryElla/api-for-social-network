# SOCIAL NETWORK API
A cute CMS-style blog site that you can publish articles, blog posts, and thoughts on others thoughts!
## Getting Started
Please follow these instructions to get your copy of the project and get it running on your local machine so you can view and debug before deployment.

### Prerequisites
If you haven't already downloaded a code editor please install one to run the project. The following is my editor of choice:

- VSCode which can download here: [VSCode](https://code.visualstudio.com/)

You will also need Node.js JavaScript runtime. Use the following link for instructions on install via download or package manager:

- Node.js download and instructions here: [Node.js](https://nodejs.dev/en/download/package-manager)

### Installation
Once you have your code editor up and running you can follow the steps below to clone the repo and run the project for yourself!

1 - Clone the repo with the following shell command:


`$ git clone https://github.com/CherryElla/tech-blog.git`

2 - Open or `cd` into the project folder with your VSCode or editor of choice and in the integrated terminal in the root directory install the dependencies using the following command:

`$ npm install`

3 - Create your .env file with the following keys, passing in your MySQL password values:

```env
DB_NAME = "tech_db"
DB_USER = "root"
DB_PASSWORD = ""
```
### Running
Now that you have your environment set up, you can use the following commands to run your MySQL, seed, and start the application:

`$ npm run create`
`$ npm run start`

Now you will be able to run the project locally. Head to `localhost:3001` and log in to the site using the seed data user, or create a new user!

### Author

- Cherie Ella Viens [GitHub](https://github.com/CherryElla)