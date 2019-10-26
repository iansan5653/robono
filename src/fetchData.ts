import { Menu, Callee } from "./interface";
import { menu, companies } from "./sampleData";

const delay = 5000;

function sleep(time: number): Promise<void> {
  return new Promise((res) => window.setTimeout(res, time));
}

export async function loadMenuByID(menuID: string): Promise<Menu> {
  await sleep(delay);
  return menu;
}

export async function loadCompanies(): Promise<Callee[]> {
  await sleep(delay);
  return companies;
}