// Initialize Firebase Admin
import * as admin from "firebase-admin";
const credential = process.env.DEV
  ? admin.credential.cert(require(`../firebase-adminsdk.json`))
  : admin.credential.applicationDefault();

if (process.env.DEV) {
  process.env["FIRESTORE_EMULATOR_HOST"] = "localhost:8888";
}
admin.initializeApp({
  credential,
});
const db = admin.firestore();
const auth = admin.auth();
db.settings({ timestampsInSnapshots: true, ignoreUndefinedProperties: true });
export { db, admin, auth };
