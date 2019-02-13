# HackHarvard Global Hackathon 2018

### A Cantonese language detection/sentiment analysis tool

> In Hong Kong, the percentage of solo dwellers has risen from 11.6 % in 2006 to 13.6% in 2016. Including the situation that living with a spouse, the percentage has risen from 32.8% in 2016 to 38.3%

The chat App with emotion analyzing function built to help the local elderly with mental health.

Our team, **Local One**, has focused on the life quality of the elderly in Hong Kong. The situation of the elderly is usually not noticed by the majority. We would like to investigate the group and find out any problems that we could help. Limited by time and ability, the scope of the investigation is limited in Hong Kong, the living city of all team members. Unsurprisingly,  we have found several problems arose among those people. After sincere consideration, we have chosen the emotional issues as the team's topic. 


## Features

### 1. AI Chatbot

We uitilize the **Dialogflow** -- an intuitive NLP(natural language processing) conversation platform formly known as API.AI to engage in simple conversations with the elderly users. 

To integrate with Dialogflow, we used **Pusher**, a simple hosted API for quickly, easily and securely adding realtime bi-directional functionality via WebSockets to web and mobile apps, or any other Internet connected device.

To send HTTP requests from Node server to Dialogflow, we installed Axios, a HTTP client for the browser and Node.js.

### 2. Speech to Text Reconginition 

The speech to text service utilizes the Cordova and Ionic Native plugins to realize the transformation from Cantonese speech message to written Chinese.

All plugin info is saved in config.xml.

### Platform issues:

On iOS devices, the speech reconginition does not stop by automatically. So a function to stop it is called.

### Package Reference

> [yue-Hant-HK]
> supported platforms: Android/ iOS
> reference link: [cordova-plugin-speechrecognition](https://github.com/pbakondy/cordova-plugin-speechrecognition)



## Demo

### Chat

<img src="/src/assets/imgs/demo/chat.png" alt="chat" width="320" height="450"/>

### Sentiment Analysis

<img src="/src/assets/imgs/demo/mood.png" alt="mood" width="320" height="450"/>

### User Profile

<img src="/src/assets/imgs/demo/profile.png" alt="mood" width="320" height="450"/>


## Usage

### Use bash

```bash
$ git clone https://github.com/zi-NaN/HackHarvard_Global_Hackathon_2018.git

$ cd HackHarvard_Global_Hackathon_2018

$ npm install    # install all packages

$ ionic serve    # App opens in browser
```

After successfully starting the app, you should be able to use the app in your default broswer.

### Reminder

To make Ionic Native Plugin accessable via browser and `ionic serve` session instead of just phones, please uncomment following original plugin class and override the methods you would like to test:

#### Speech to Text: 

1. First un-comment following blocks in `/src/app/app.module.ts`:

```typescript
import { SpeechRecognition } from '@ionic-native/speech-recognition';  // line 21
// more code...
providers: [     
    StatusBar,
    ...
    SpeechRecognition,   // line 63
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ...
  ],
// more code...
```

2. Then go to `/src/pages/chatbot/chatbot.ts`, uncomment following:
```typescript
import { SpeechRecognition } from '@ionic-native/speech-recognition';  // line 5
// ...line 28
// add speech to text plugin to constructor
private speechRecognition: SpeechRecognition) {
    
// line 41
  ngOnInit() {

    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {

        if (!hasPermission) {
          this.speechRecognition.requestPermission()
            .then(
              () => console.log('Granted'),
              () => console.log('Denied')
            )
        }
      });
  }
  // start listening
  start() {

    this.speechRecognition.startListening()
      .subscribe(
        (matches: Array<string>) => {
          this.speech = matches[0];
        },
        (onerror) => console.log('error:', onerror)
      )
  }
```
3. Mock Plugins to use in the browser. 
```typescript
// extends the original class
class SpeechMock extends SpeechRecongnition {
  // *** 
}
// then override the previous class in the module
providers: [
  { provide: SpeechRecongnition, useClass: SpeechMock }
]
```

## Built with
ionic (Ionic CLI)  : 4.6.0 (/usr/local/lib/node_modules/ionic)

Ionic Framework    : ionic-angular 3.9.2

@ionic/app-scripts : 3.2.1

NodeJS : v8.10.0 (/usr/bin/node)

npm    : 3.5.2

[Dialogflow](https://dialogflow.com/):  Build natural and rich conversational experiences powered by AI, built on Google Infrastructure.

[Pusher](https://pusher.com/): Hosted APIs to built Realtime Apps. 