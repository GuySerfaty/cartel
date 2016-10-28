# Tasks

Task life cycle have 3 stages:
  - Task pre code (For example on deploy we will compile all assets)
  - Task code run (For example the deploy itself)
  - Task post code (For example clear all assets from CDN and send a slack messege)

There can be found on `packege.json` on root of this project.

So if we will run `npm run deploy` we will actualy run 3 scripts as shown below.
```
"scripts": {
  "predeploy": "node tasks/deploy_pre.js", //Pre
  "deploy": "node tasks/deploy.js", // Taks
  "postdeploy": "node tasks/deploy_post.js" //Post
}
```
