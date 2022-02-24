import { getApp } from "firebase/app";

import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

//init firebase config
//@ts-ignore
const firebaseConfig = require("../../../firebase-adminsdk.json");
const functions = getFunctions(getApp());

connectFunctionsEmulator(functions, "localhost", 5001);
