import React from 'react'
import { BsFillHouseGearFill } from 'react-icons/bs'
import { ImOffice } from 'react-icons/im'

import residentalServiceImage from '../assets/service/residental-service.jpg'
import officeServiceImage from '../assets/service/office-service.jpg'

// **** Extras **** //
// import { MdSoupKitchen } from 'react-icons/md'
// import { AiFillShop } from 'react-icons/ai'
// import { FaShower } from 'react-icons/fa'
// import { LuLampCeiling } from 'react-icons/lu'

export const navData = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Porfolio',
    href: '/portfolio'
  },
  {
    name: 'About',
    href: '/about-us'
  },
  {
    name: 'Contact',
    href: '/contact-us'
  }
]

export const aboutData = {
  title: 'We Provide You Best Experience',
  quote:
    'Out signature design process comes standard.. refresh, remodel, new and enjoyable design experience',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum odio vel elementum ultrices. Mauris ultrices, ex ac auctor cursus, metus dolor efficitur tortor, sed fermentum enim enim vel odio. Nullam nec ligula pellentesque, ultricies metus eu, tempus felis. Donec luctus vestibulum elit bibendum commodo. Curabitur vitae libero id diam efficitur accumsan. Donec porttitor dui vel dignissim lacinia. Nulla condimentum ipsum ullamcorper pharetra lacinia. Curabitur sodales efficitur tortor sit amet scelerisque. Duis ac tristique massa, eu convallis mi. Integer eget pharetra neque. Aenean rutrum massa id ante blandit pharetra. Aliquam maximus efficitur enim ut dapibus. Nam porta, lacus vel tempor sollicitudin, sem quam vulputate orci, in placerat tortor sapien in elit. Nam imperdiet dapibus lorem, eget maximus quam pretium id.'
}

export const servicesData = {
  title: 'Solutions',
  subTitle: 'Tailored solutions to transform your space',
  serviceList: [
    'Design Concept',
    'Floor Layout',
    'Floor Covering',
    'Electrical',
    'False Ceiling',
    'Custom Furniture',
    'Modular Furniture',
    'Painting',
    'Catalog Furniture',
    'Deep Cleaning'
  ],
  services: [
    {
      title: 'Residential Interior',
      imageUrl: residentalServiceImage,
      aos: 'zoom-out-up',
      delay: '400',
      icon: <BsFillHouseGearFill className='text-5xl text-accent-secondary/80' />,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur ligula aliquam, lobortis odio eu, consequat nibh.',
      serviceList: [
        'Design Concept / Discution',
        'Floor Layout',
        'Floor Covering',
        'Electrical',
        'False Ceiling',
        'Custome Furniture',
        'Modular Furniture',
        'Painting',
        'Catlouge Furniture',
        'Painting',
        'Deep Cleaning'
      ]
    },
    {
      title: 'Office Interior',
      aos: 'zoom-out-up',
      delay: '500',
      imageUrl: officeServiceImage,
      icon: <ImOffice className='text-5xl text-accent-secondary/80' />,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur ligula aliquam, lobortis odio eu, consequat nibh.',
      serviceList: [
        'Introduction Metting',
        'Design Concept / Discution',
        'Floor Layout',
        'Floor Covering',
        'Electrical',
        'False Ceiling',
        'Custome Furniture',
        'Modular Furniture',
        'Painting',
        'Catlouge Furniture',
        'Painting',
        'Deep Cleaning'
      ]
    }
    // {
    //   title: 'Retail Shop & Showroom',
    //   aos: 'zoom-out-up',
    //   delay: '600',
    //   icon: <AiFillShop className='text-5xl text-accent-secondary/80' />,
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur ligula aliquam, lobortis odio eu, consequat nibh.'
    // },
    // {
    //   title: 'False Ceiling',
    //   aos: 'zoom-out-up',
    //   delay: '600',
    //   icon: <LuLampCeiling className='text-5xl text-accent-secondary/80' />,
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur ligula aliquam, lobortis odio eu, consequat nibh.'
    // },
    // {
    //   title: 'Modular Kitchen',
    //   aos: 'zoom-out-up',
    //   delay: '700',
    //   icon: <MdSoupKitchen className='text-5xl text-accent-secondary/80' />,
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur ligula aliquam, lobortis odio eu, consequat nibh.'
    // },
    // {
    //   title: 'Master Bathroom',
    //   aos: 'zoom-out-up',
    //   delay: '800',
    //   icon: <FaShower className='text-5xl text-accent-secondary/80' />,
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur ligula aliquam, lobortis odio eu, consequat nibh.'
    // }
  ]
}

export const companyStats = [
  {
    title: 'Projects Completed',
    value: 154
  },
  {
    title: 'Our Happy Clients',
    value: 120
  },
  {
    title: 'Years of Experience',
    value: '10+'
  },
  {
    title: 'On Going Projects',
    value: 10
  }
]
