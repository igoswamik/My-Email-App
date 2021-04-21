# Email editor and sender Shopify App
_(under development)_

## Process

- [create a Shopify partner account](https://partners.shopify.com/signup).
- [create a Development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) where you can install and test your app.
- In the Partner dashboard, [create a new app](https://help.shopify.com/en/api/tools/partner-dashboard/your-apps#create-a-new-app). You’ll need this app’s API credentials during     the setup process.
- Install Shopify App CLI (https://shopify.dev/tools/cli/installation)
- use ngrok, in order to create a secure tunnel to your app running on your localhost
- add the ngrok URL and the appropriate redirect for your OAuth callback route to your app settings
- To make email editor visit (https://medium.com/unlayer-blog/creating-a-drag-n-drop-email-editor-with-react-db1e9eb42386)
- Connect with MongoDB Atlas Database (https://docs.atlas.mongodb.com/getting-started/)
- to save design template JSON you have to make a REST API and send API request from client side along with design JSON then at server side you can save this JSON in your database
- to save JSON in database I made a mongoose schema and the idea is to convert this JSON into string using JSON.stringify() and then save it in the database collection
- make another API call to request the JSON from database inside onLoad function which should be called when EDIT template get clicked.
- recieve html comming inside exportHTML function on clicking exportHtml button and use it to send mail,
- enable send mail option using nodemailer(https://www.w3schools.com/nodejs/nodejs_email.asp )



## Screenshots
>Email Template Editor
![edit template](https://user-images.githubusercontent.com/51289274/115055764-89c26680-9eff-11eb-863a-813dac9118a8.png)

>Sample Template Loaded (sample template JSON file taken from https://github.com/unlayer/react-email-editor)
![sample template](https://user-images.githubusercontent.com/51289274/115055785-92b33800-9eff-11eb-8ea0-b456f61ba539.png)


