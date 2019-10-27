import {Menu, Callee} from "./interface";
import * as sample from "./sampleData";

const ENDPOINT = process.env.REACT_APP_SERVER_BASE;
console.log(ENDPOINT);

async function getJsonData(url: string): Promise<any> {
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  } else {
    console.info(response);
    throw new Error(response.statusText);
  }
}

export async function loadMenuByID(menuID: string): Promise<Menu> {
  try {
    return await getJsonData(`${ENDPOINT}/menus/${menuID}`);
  } catch (e) {
    if (process.env.NODE_ENV === "development") {
      return sample.menu;
    } else {
      throw e;
    }
  }
}

export async function loadCompanies(): Promise<Callee[]> {
  try {
    return await getJsonData(`${ENDPOINT}/all-callees`);
  } catch (e) {
    if (process.env.NODE_ENV === "development") {
      return sample.companies;
    } else {
      throw e;
    }
  }
}
