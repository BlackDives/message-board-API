# Message Board API!!

This is the API for the message board client [https://github.com/BlackDives/message-board-site](https://github.com/BlackDives/message-board-site). It only has one end point, /messages that allows you to GET and POST message data.

## How to use the API

1. After you clone the repository, run the command `npm install` or `yarn install` (whichever you prefer).

2. Once you have all of the dependencies installed, **create a .env file in the root of the folder and add three variables named DATABASE_URL DATABASE_USERNAME and DATABASE_PASSWORD**, and add your mongoDB credentials inside each of those variables.

3. Once you are connected to your mongoDB database, run the command `npm run start` or `yarn start` to run the application locally.

4. If you are using this API with the corresponsing client application, I would suggest opening another tab of whichever IDE you are using and have both applications running locally.
