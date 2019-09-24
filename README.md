# bot-boilerplate

Our very own opinionated boiler plate for bots

## Todo

These are list of instructions to follow after creating your repo from this repo:

1. Create a `.env` file and copy all that's in the `dotenv` file into it, then delete the `dotenv`. Make sure you enter the required values before starting the server.

2. Change the following info:

    - `name` value in the package.json to the name of your project;
    - Go to `docker-compose.yml`, change `bot-boilerplate` to the name of your project;
    - In that same file change the ports from `3010:3040` to ones that are free;
