import { BsFillHouseGearFill } from "react-icons/bs";
import { MdSoupKitchen } from "react-icons/md";
import { AiFillShop } from "react-icons/ai";
import { FaShower } from "react-icons/fa";
import { ImOffice } from "react-icons/im";
import { LuLampCeiling } from "react-icons/lu";

export const navData = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Porfolio",
    href: "/portfolio",
  },
  {
    name: "About",
    href: "/about-us",
  },
  {
    name: "Contact",
    href: "/contact-us",
  },
];

export const aboutData = {
  title: "We Provide You Best Experience",
  quote:
    "Out signature design process comes standard.. refresh, remodel, new and enjoyable design experience",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum odio vel elementum ultrices. Mauris ultrices, ex ac auctor cursus, metus dolor efficitur tortor, sed fermentum enim enim vel odio. Nullam nec ligula pellentesque, ultricies metus eu, tempus felis. Donec luctus vestibulum elit bibendum commodo. Curabitur vitae libero id diam efficitur accumsan. Donec porttitor dui vel dignissim lacinia. Nulla condimentum ipsum ullamcorper pharetra lacinia. Curabitur sodales efficitur tortor sit amet scelerisque. Duis ac tristique massa, eu convallis mi. Integer eget pharetra neque. Aenean rutrum massa id ante blandit pharetra. Aliquam maximus efficitur enim ut dapibus. Nam porta, lacus vel tempor sollicitudin, sem quam vulputate orci, in placerat tortor sapien in elit. Nam imperdiet dapibus lorem, eget maximus quam pretium id.",
};

export const servicesData = {
  title: "Our Services",
  subTitle: "What We're Providing",
  services: [
    {
      title: "Residential Interior",
      aos: "zoom-out-up",
      delay: "400",
      icon: <BsFillHouseGearFill className="text-5xl text-accent-secondary/80" />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur ligula aliquam, lobortis odio eu, consequat nibh.",
    },
    {
      title: "Office Interior",
      aos: "zoom-out-up",
      delay: "500",
      icon: <ImOffice className="text-5xl text-accent-secondary/80" />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur ligula aliquam, lobortis odio eu, consequat nibh.",
    },
    {
      title: "Retail Shop & Showroom",
      aos: "zoom-out-up",
      delay: "600",
      icon: <AiFillShop className="text-5xl text-accent-secondary/80" />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur ligula aliquam, lobortis odio eu, consequat nibh.",
    },
    {
      title: "False Ceiling",
      aos: "zoom-out-up",
      delay: "600",
      icon: <LuLampCeiling className="text-5xl text-accent-secondary/80" />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur ligula aliquam, lobortis odio eu, consequat nibh.",
    },
    {
      title: "Modular Kitchen",
      aos: "zoom-out-up",
      delay: "700",
      icon: <MdSoupKitchen className="text-5xl text-accent-secondary/80" />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur ligula aliquam, lobortis odio eu, consequat nibh.",
    },
    {
      title: "Master Bathroom",
      aos: "zoom-out-up",
      delay: "800",
      icon: <FaShower className="text-5xl text-accent-secondary/80" />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur ligula aliquam, lobortis odio eu, consequat nibh.",
    },
  ],
};
