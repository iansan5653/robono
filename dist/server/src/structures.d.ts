export interface Callee {
    name: string;
    description: string;
    phoneNumber: string;
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
//# sourceMappingURL=structures.d.ts.map