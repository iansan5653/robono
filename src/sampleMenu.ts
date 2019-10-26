import { Menu } from "./interface";

const techSupportSubMenu: Menu = {
  question: "What di you need tech support for?",
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

const menu: Menu = {
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

export default menu;
