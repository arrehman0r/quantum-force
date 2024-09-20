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
      { id: 4, text: "Digital Marketing", href: "/"}
    ],
  },
  {
    id: 2,
    title: "Trainings",
    navs: [
      { id: 3, text: "WordPress", href: "https://wa.link/zip380"},
      { id: 3, text: "Shopify", href: "https://wa.link/zip380"},
      { id: 3, text: "React JS", href: "https://wa.link/zip380"},
      { id: 3, text: "Daraz", href: "https://wa.link/zip380"},
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
        value:'stacknexlab@gmail.com',
        icon:Mail()
    },
     {
        id:2,
        type:'Phone',
        value:'+92 325 5380150',
        icon:Phone()
     },
    {
        id:3,
        type:'Location',
        value:'Lahore, Pakistan',
        icon:Location()
    },
]


export const FooterBannerNavs : Nav[] = [
    
]