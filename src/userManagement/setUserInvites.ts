import { auth, db } from "../firebaseConfig";
import { Request, Response } from "express";
import { rowyUserInvites } from "../constants/Collections";

export interface IPayload {
  email: string;
  roles: Array<string>;
}

export const setUserInvites = async (payload: IPayload) => {
  console.log("what is payload", payload);
  // check if user exists
  const userQuery = await db
    .collection(rowyUserInvites)
    .where("email", "==", payload.email)
    .get();

  if (userQuery.docs.length !== 0) {
    throw new Error("User already invited");
  }

  return await db
    .collection(rowyUserInvites)
    .add({ ...payload })
    .catch((err: any) => {
      throw new Error(err.message);
    }); //TODO double check if this works, the goal is to throw and error and see if the parent layer captures it
};
