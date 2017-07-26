# PeopleOrganizer

#### **By Jordan Loop**

## Description

A user can create, update, and delete characters for Dungeons and Dragons.

## Setup/Installation Requirements

#### From your terminal

* Navigate to your desktop

* Clone repository with following command:
  <pre>git clone https://github.com/Jordloop/People-Organizer</pre>

* Install required packages from top level of project's directory.
  <pre>npm install</pre>
  <pre>bower install</pre>

#### Prepare project for an API key
* Create a file in the projects app folder called "api-keys.ts"

*  If you plan on pushing this to your own github; include the path to api-keys.ts in .gitignore

* In api-keys.ts enter the following snippet
  <pre>  export var masterFirebaseConfig = {
    apiKey: "---",
    authDomain: "---",
    databaseURL: "---",
    projectId: "---",
    storageBucket: "---",
    messagingSenderId: "---"
  };</pre>

#### Obtain your own API key
* Navigate to Firebase and sign in using your Google account:<br>
  https://firebase.google.com/

  * Select "Get Started", then "Add Project".

  * Name your project "Characters".

  * Click the reddish button that is labeled "Add Firebase to your web app".

  * Copy the content within the "var config = { }"

  * Paste content inside your masterFirebaseConfig variable inside api-keys.ts

#### Import sample-character.json to firebase

* In firebase select "Database" on the left-hand nav bar.

* Click the vertical dots in the top right corner; select "Import Json".

* Select "Browse" and choose to import "sample-character.json" in the top level of the project's folder.

* Finally, "Rules" in the nav bar at the top of the page and replace the content with this snippet:
  <pre>{
  "rules": {
    ".read": "true",
    ".write": "true"
  }
}</pre>

#### Using the api
* Run the following command in your terminal:
  <pre>ng serve</pre>
* Navigate to the following address to use the api<br>
  http://localhost:4200/
## Known Bugs

* No known bugs

## Support and contact details

If you have any issues or have questions, ideas, concerns, or contributions please contact through Github.

## Technologies Used

* Typescript
* HTML
* BootStrap
* Angular 2


### License
Copyright (c) 2017 Jordan Loop, Epicodus
