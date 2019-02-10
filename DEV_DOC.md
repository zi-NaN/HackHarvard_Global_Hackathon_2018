# create chat page

generate 2 service provider

```shell

danni@danni-pc:~/Dropbox/CS/Hackathon/HackHarvard_Global_Hackathon_2018$ ionic g provider pusher-service
[OK] Generated a provider named pusher-service!
danni@danni-pc:~/Dropbox/CS/Hackathon/HackHarvard_Global_Hackathon_2018$ ionic g provider chatbot-service
[OK] Generated a provider named chatbot-service!

```

To handle when a new message is sent from node server, use Express

> npm install express body-parser cors pusher dotenv shortid


install Axios to send the HTTP requests from Node server to Dialogflow endpoints

> npm install axios

Install dialogFlow(error: cannot find module './dislogFlow'):

> npm install --save dialogflow

