import { icons } from "lucide-react";
import Link from "next/link";
import {FaGithub,FaLinkedin,FaTwitter,FaInstagram,FaFacebook} from 'react-icons/fa'

const social =[
    {icon:<FaGithub/>,path:'https://github.com/vedang18200'},
    {icon:<FaLinkedin/>,path:'https://www.linkedin.com/in/vedang-deshmukh-249730249'},
    {icon:<FaTwitter/>,path:'https://x.com/Vedang1862004'},
    {icon:<FaInstagram/>,path:'https://www.instagram.com/deshmukh_vedang/'},
    {icon:<FaFacebook/>,path:'https://www.facebook.com/vedang.deshmukh.71/'},
]

const Socials = ({ containerStyles, iconStyles }) => {
    return (
          <div className={containerStyles}>
              {social.map((item, index) => (
                  <Link key={index} href={item.path}  target="blank"className={iconStyles}>
                      {item.icon}
                  </Link>
              ))}
          </div>
      );
  };
export default Socials;

