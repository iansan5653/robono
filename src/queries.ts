/**
 * @author Ian Sanders
 * @copyright 2019 Ian Sanders
 * @license MIT
 */

import {Callee, Menu} from "./interface";
import secret from "./secret";
import mongodb from "mongodb";

const CONN_STR = `mongodb+srv://${secret.username}:${secret.password}@miniaturecarnival-rlofd.gcp.mongodb.net/test?retryWrites=true&w=majority`;

export async function queryAllCallees(): Promise<Callee[]> {
  const client = await mongodb.connect(CONN_STR);
  const db = client.db("MiniatureCarnivalData");
  const collection = db.collection("Callees");
  const result: mongodb.Cursor<Callee> = collection.find({});
  return await result.toArray();
}

export async function queryMenu(menuID: string): Promise<Menu | null> {
  const client = await mongodb.connect(CONN_STR);
  const db = client.db("MiniatureCarnivalData");
  const collection = db.collection("Menus");
  const result: mongodb.Cursor<Menu> = collection.find({
    _id: new mongodb.ObjectID(menuID)
  });
  return await result.next();
}
