import Link from "next/link";

import {
  RiYoutubeLine, 
  RiInstagramLine, 
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiTwitterLine,
  RiLinkedinBoxLine,
  RiGithubFill
} from 'react-icons/ri'


const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://twitter.com/OussamaHorrig'} className="hover:text-accent transition-all duration-300" target="blank">
      <RiTwitterLine/>
    </Link>
    <Link href={'https://www.linkedin.com/in/oussama-horrigue-69624b1b7/'} className="hover:text-accent transition-all duration-300" target="blank">
      <RiLinkedinBoxLine/>
    </Link>
    <Link href={'https://www.facebook.com/oussama.horrigue'} className="hover:text-accent transition-all duration-300" target="blank">
      <RiFacebookLine/>
    </Link>
    <Link href={'https://dribbble.com/OussamaHorrigue'} className="hover:text-accent transition-all duration-300" target="blank">
      <RiDribbbleLine/>
    </Link>
    <Link href={'https://www.behance.net/oussamahorrigue'} className="hover:text-accent transition-all duration-300" target="blank">
      <RiBehanceLine/>
    </Link>
    <Link href={'https://www.pinterest.com/horrigueouss/'} className="hover:text-accent transition-all duration-300" target="blank">
      <RiPinterestLine/>
    </Link>
    <Link href={'https://github.com/oussamahorrigue'} className="hover:text-accent transition-all duration-300" target="blank">
      <RiGithubFill/>
    </Link>
  </div>
  )
};

export default Socials;
