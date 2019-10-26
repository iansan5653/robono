/**
 * @author Ian Sanders
 * @copyright 2019 Ian Sanders
 * @license MIT
 */

import * as samples from "./sampleData";
import {Callee, Menu} from "./interface";

export function queryAllCallees(): Callee[] {
  return samples.companies;
}

export function queryMenu(menuID: string): Menu {
  menuID;
  return samples.menu;
}
