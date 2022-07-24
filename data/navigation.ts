import {
  MegamenuItem,
  NavItemType,
} from "../components/Navigation/NavigationItem";
import ncNanoId from "../utils/ncNanoId";
import __megamenu from "./jsons/__megamenu.json";

export const megaMenuDemo: MegamenuItem[] = [
  {
    id: ncNanoId(),
    // image:
    //   "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbXBhbnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60",
    // title: "Company",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "#",
      name: i.Company,
    })),
  },
  {
    id: ncNanoId(),
  
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "#",
      name: i.AppName,
    })),
  },
  {
    id: ncNanoId(),
  
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "#",
      name: i.City,
    })),
  },
 

];

const megaMenu3ItemDemo: MegamenuItem[] = [
  {
    id: ncNanoId(),
  
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "#",
      name: i.Corporate,
    })),
  },
 
];

const dashboardChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/dashboard",
    name: "Dashboard",
  },
  {
    id: ncNanoId(),
    href: "/dashboard/posts",
    name: "Posts",
  },
  {
    id: ncNanoId(),
    href: "/dashboard/edit-profile",
    name: "Edit profile",
  },
  {
    id: ncNanoId(),
    href: "/dashboard/billing-address",
    name: "Billing address",
  },
  {
    id: ncNanoId(),
    href: "/dashboard/subscription",
    name: "Subscription",
  },
  {
    id: ncNanoId(),
    href: "/dashboard/submit-post",
    name: "Submit post",
  },
];

export const otherPageChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/about",
    name: "About",
  },
  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact us",
  },
  {
    id: ncNanoId(),
    href: "/login",
    name: "Login",
  },
  {
    id: ncNanoId(),
    href: "/signup",
    name: "Signup",
  },
  {
    id: ncNanoId(),
    href: "/forgot-pass",
    name: "Forgot Password",
  },
  {
    id: ncNanoId(),
    href: "/dashboard",
    name: "Dashboard",
    type: "dropdown",
    
    children: dashboardChildMenus,
  },
  {
    id: ncNanoId(),
    href: "/subscription",
    name: "Subscription",
  },
];

const footballChildren: NavItemType[] = [
  
  {
    id: ncNanoId(),
    href: "/author/the-demo-author-slug",
    name: "Ligues Nationale",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/author/the-demo-author-slug",
        name: "Ligue 1",
      },
      {
        id: ncNanoId(),
        href: "/author/the-demo-author-slug",
        name: "Ligue 2",
      },
      {
        id: ncNanoId(),
        href: "/author/the-demo-author-slug",
        name: "LNF Amateur",
      },
      {
        id: ncNanoId(),
        href: "/author/the-demo-author-slug",
        name: "Lingue inter-régions",
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/search",
    name: "Championnats européens",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/author/the-demo-author-slug",
        name: "Ligue 1",
      },
      {
        id: ncNanoId(),
        href: "/author/the-demo-author-slug",
        name: "Ligue 2",
      },
      {
        id: ncNanoId(),
        href: "/author/the-demo-author-slug",
        name: "LNF Amateur",
      },
      {
        id: ncNanoId(),
        href: "/author/the-demo-author-slug",
        name: "Lingue inter-régions",
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/search",
    name: "Compétitions par continent",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/author/the-demo-author-slug",
        name: "Ligue 1",
      },
      {
        id: ncNanoId(),
        href: "/author/the-demo-author-slug",
        name: "Ligue 2",
      },
      {
        id: ncNanoId(),
        href: "/author/the-demo-author-slug",
        name: "LNF Amateur",
      },
      {
        id: ncNanoId(),
        href: "/author/the-demo-author-slug",
        name: "Lingue inter-régions",
      },
    ],
  },

];

const singleChildrenMenus: NavItemType = {
  id: ncNanoId(),
  href: "/single/this-is-single-slug",
  name: "Single Template ",
  type: "dropdown",
  children: [
    {
      id: ncNanoId(),
      href: "/single-sidebar/this-is-single-slug",
      name: "Single Template 1",
    },
    {
      id: ncNanoId(),
      name: "Template 1 sidebar",
      href: "/single/this-is-single-slug-2",
    },
    {
      id: ncNanoId(),
      href: "/single-template-2/this-is-single-slug-2",
      name: "Single Template 2",
    },
    {
      id: ncNanoId(),
      href: "/single-2-sidebar/this-is-single-slug",
      name: "Template 2 sidebar",
    },
    {
      id: ncNanoId(),
      href: "/single-template-3/this-is-single-slug-3",
      name: "Single Template 3",
    },
    {
      id: ncNanoId(),
      href: "/single-3-sidebar/this-is-single-slug",
      name: "Template 3 sidebar",
    },
  ],
};

export const demoChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Default Demo",
  },
  {
    id: ncNanoId(),
    href: "/home-demo-2",
    name: "Home Demo 2",
  },
  {
    id: ncNanoId(),
    href: "/home-demo-3",
    name: "Home Demo 3",
  },
  {
    id: ncNanoId(),
    href: "/home-demo-4",
    name: "Home Demo 4",
  },
];
const templateChilds: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/single-gallery/this-is-single-slug",
    name: "Single Gallery",
  },
  {
    id: ncNanoId(),
    href: "/single-audio/this-is-single-slug",
    name: "Single Audio",
  },
  {
    id: ncNanoId(),
    href: "/single-video/this-is-single-slug",
    name: "Single Video",
  },
];
export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
    type: "dropdown",
    children: demoChildMenus,
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Five cols",
    type: "megaMenu",
    megaMenu: megaMenuDemo,
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Other pages",
    type: "dropdown",
    children: otherPageChildMenus,
  },
];


