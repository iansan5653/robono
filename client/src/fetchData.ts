import { Menu, Callee } from "./interface";
import { menu, companies } from "./sampleData";

const ENDPOINT = "http://127.0.0.1:3600";

const delay = 200;

function sleep(time: number): Promise<void> {
  return new Promise(res => window.setTimeout(res, time));
}

export async function loadMenuByID(menuID: string): Promise<Menu> {
  await sleep(delay);
  return menu;
}

export async function loadCompanies(): Promise<Callee[]> {
  const response = await fetch(`${ENDPOINT}/all-callees`);
  console.log(response);
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(response.statusText);
  }
}
