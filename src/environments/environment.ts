// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Esto a hay que pasarlo a false cuando estemos en desarrollo

export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyCAAlbOd6eZcF19jQl_-ds9Kwa9rUF2PaU",
    authDomain: "crud-gbvong.firebaseapp.com",
    databaseURL: "https://crud-gbvong.firebaseio.com",
    projectId: "crud-gbvong",
    storageBucket: "crud-gbvong.appspot.com",
    messagingSenderId: "386151791638",
    appId: "1:386151791638:web:29d881731162d17d218937"
  }
};

// Initialize Firebase
// firebase.initializeApp(firebase);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
