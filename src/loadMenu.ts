import { Menu } from "./interface";
import menu from "./sampleMenu";

export async function loadMenuByID(menuID: string): Promise<Menu> {
  return menu;
}