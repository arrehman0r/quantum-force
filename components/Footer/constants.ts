import { Location, Mail, Phone } from "../Icons/ContactIcons";
import { Facebook, Instagram, Linkedin, Twitter } from "../Icons/Socials";

type Nav = {
    id:number;
    text:string;
    href:string;
}
interface FooterNavs {
    id:number;
    title:string;
    navs: Nav[];
}
export const FooterNavs : FooterNavs[] = [
  {
    id: 1,
    title: "Services",
    navs: [
      { id: 1, text: "UI/UX", href: "/"},
      { id: 2, text: "Website Dev", href: "/"},
      { id: 3, text: "Mobile Dev", href: "/"},
      { id: 3, text: "SEO", href: "/"}
    ],
  },
  {
    id: 2,
    title: "Resources",
    navs: [
      { id: 1, text: "Compliance", href: "/"},
      { id: 2, text: "Case Studies", href: "/"},
      { id: 3, text: "Webinars", href: "/"},
      { id: 3, text: "Developers", href: "/"}
    ],
  }
];


export const Socials = [
    {
        id:1,
        name:'Facebook',
        icon:Facebook
    },
    {
        id:2,
        name:'Facebook',
        icon:Instagram
    },
    {
        id:3,
        name:'Facebook',
        icon:Twitter
    },
    {
        id:4,
        name:'Facebook',
        icon:Linkedin
    },
]

export const Contacts = [
    {
        id:1,
        type:'Mail',
        value:'mertenercan@gmail.com',
        icon:Mail()
    },
    {
        id:2,
        type:'Phone',
        value:'+31 331 31 31',
        icon:Phone()
    },
    {
        id:3,
        type:'Location',
        value:'Olympos Mountains',
        icon:Location()
    },
]


export const FooterBannerNavs : Nav[] = [
    {
        id:1,
        text:"Website Terms",
        href:'/'
    },
    {
        id:2,
        text:"Privacy Policy",
        href:'/'
    },
    {
        id:3,
        text:"Cookies Policy",
        href:'/'
    },
]