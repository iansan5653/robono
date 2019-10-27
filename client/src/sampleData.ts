import {Menu, Callee} from "./interface";

const techSupportSubMenu: Menu = {
  question: "What did you need tech support for?",
  options: [
    {
      dialNumber: 1,
      text: "A laptop.",
      next: null
    },
    {
      dialNumber: 2,
      text: "A phone.",
      next: null
    },
    {
      dialNumber: 3,
      text: "A router or moden.",
      next: null
    },
    {
      dialNumber: 4,
      text: "Something else.",
      next: null
    }
  ]
};
const planChangeSubmenu: Menu = {
  question: "What would you like to do with your plan?",
  options: [
    {
      dialNumber: 1,
      text: "Change my billing information.",
      next: null
    },
    {
      dialNumber: 2,
      text: "Upgrade my plan.",
      next: null
    },
    {
      dialNumber: 3,
      text: "Cancel my plan.",
      next: null
    },
    {
      dialNumber: 4,
      text: "Something else.",
      next: null
    }
  ]
};
const connectionSubMenu: Menu = {
  question: "What describes the issues with your connection?",
  options: [
    {
      dialNumber: 1,
      text: "It's slow.",
      next: null
    },
    {
      dialNumber: 2,
      text: "It's unreliable.",
      next: null
    },
    {
      dialNumber: 3,
      text: "It's too fast.",
      next: null
    }
  ]
};

export const menu: Menu = {
  question: "What is the purpose of your call today?",
  options: [
    {
      dialNumber: 1,
      text: "I have issues with my connection.",
      next: connectionSubMenu
    },
    {
      dialNumber: 2,
      text: "I want to provide feedback.",
      next: null
    },
    {
      dialNumber: 3,
      text: "I want to change my plan.",
      next: planChangeSubmenu
    },
    {
      dialNumber: 4,
      text: "I need tech support.",
      next: techSupportSubMenu
    }
  ]
};

export const companies: Callee[] = [
  {
    name: "Comcast",
    description: "Telecom",
    menuID: "asdf",
    phoneNumber: "1-800-555-6789"
  },
  {
    name: "Comcast",
    description: "Telecom",
    menuID: "asdf",
    phoneNumber: "1-800-555-6789"
  },
  {
    name: "University of North Florida",
    description: "University",
    menuID: "asdf",
    phoneNumber: "1-800-555-6789"
  },
  {
    name: "Bank of America",
    description: "Bank",
    menuID: "asdf",
    phoneNumber: "1-800-555-6789"
  },
  {
    name: "Disney",
    description: "Theme Park",
    menuID: "asdf",
    phoneNumber: "1-800-555-6789"
  },
  {
    name: "Georgia Tech",
    description: "University",
    menuID: "asdf",
    phoneNumber: "1-800-555-6789"
  },
  {
    name: "Samsung",
    description: "Telecom",
    menuID: "asdf",
    phoneNumber: "1-800-555-6789"
  },
  {
    name: "Comcast",
    description: "Telecom",
    menuID: "asdf",
    phoneNumber: "1-800-555-6789"
  }
];
