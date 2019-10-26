export interface Callee {
  name: string;
  description: string;
  // icon?: string;
  // phoneNumber: string;
  menuID: string;
}

export interface Menu {
  question: string;
  options: MenuOption[];
}

export interface MenuOption {
  dialNumber: number;
  text: string;
  next: Menu | null;
}