export interface Callee {
  name: string;
  description: string;
  // icon?: string;
  // phoneNumber: string;
  // menuId: string;
}

export interface Menu {
  question: string;
  options: {
    dialNumber: number;
    text: string;
    next: Menu | null;
  };
}
