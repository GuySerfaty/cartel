Malparidos
======

This is a geo-location based library used for Malparidos, a drug dealing simulation app built in React Native and works on both **iOS** and **Android**.
[For more information](https://www.malparidos.com/)

Installation
======

To install the environment you would need to have 3 things installed:

* Node : `brew install node`
* MySQL: `brew install mysql`
* Watchman: `brew install watchman`

Now install React Native CLI to build iOS and Android apps:
```
npm install -g react-native-cli
npm install -g rnpm
```

Then navigate to your directory and install environment:
```
cd ~/cartel
npm install
```

Now, link your libraries with RNPM:
```
cd Malparidos
npm install
rnpm link
```

Download [this chrome extension](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en) to allow Allow-Control-Allow-Origin *

And **that's it!** Enjoy your new Malparidos local directory

License
======
This library is not yet registered under any license.


Todo List
======

## Server:


* Environment setup - change environmental variable (dev/prod/staging)
* New developer station - npm install should do everything listed above here
* Unique fb_id db (only update)
* Blue print
* Error handling - API
* Server session best practice implementation
* API for location samples - /user/:userId/location/get , /user/:userId/location/set , /user/location/set, /user/location/get,


## Client:

* API improvements
* Profile page
* Check if user is logged-in, route him to homescreen
* Location
* Start Android development
