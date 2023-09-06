import Link from "next/link";

import {
  RiYoutubeLine, 
  RiInstagramLine, 
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiTwitterLine,
  RiLinkedinBoxLine
} from 'react-icons/ri'


const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://twitter.com/OussamaHorrig'} className="hover:text-accent transition-all duration-300">
      <RiTwitterLine/>
    </Link>
    <Link href={'https://www.linkedin.com/in/oussama-horrigue-69624b1b7/'} className="hover:text-accent transition-all duration-300">
      <RiLinkedinBoxLine/>
    </Link>
    <Link href={'https://www.facebook.com/oussama.horrigue'} className="hover:text-accent transition-all duration-300">
      <RiFacebookLine/>
    </Link>
    <Link href={'https://dribbble.com/OussamaHorrigue'} className="hover:text-accent transition-all duration-300">
      <RiDribbbleLine/>
    </Link>
    <Link href={'https://www.behance.net/oussamahorrigue'} className="hover:text-accent transition-all duration-300">
      <RiBehanceLine/>
    </Link>
    <Link href={'https://www.pinterest.com/horrigueouss/'} className="hover:text-accent transition-all duration-300">
      <RiPinterestLine/>
    </Link>
  </div>
  )
};

export default Socials;
