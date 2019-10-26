import { Menu, Callee } from "./interface";

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
  return await getJsonData(`${ENDPOINT}/menus/${menuID}`);
}

export async function loadCompanies(): Promise<Callee[]> {
  return await getJsonData(`${ENDPOINT}/all-callees`);
}
