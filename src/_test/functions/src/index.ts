import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

export const hellowWorldTest = functions
  .region("us-central1")
  .https.onRequest((request, response) => {
    console.log("hello wolrd");
    response.send("Hello Wolrd");
  });
