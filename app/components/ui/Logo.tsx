import Link from 'next/link';
import React from 'react'

interface LogoProps {
  className?: string;
}


const Logo = ({className}: Readonly<LogoProps>) => {

    return (
      <Link href="/" {...(className && {className})}>
        <span className="font-black text-accent text-2xl tracking-tight flex items-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mr-2">
            <rect width="32" height="32" rx="8" fill="#07bc0c" />
            <rect x="8" y="8" width="16" height="16" rx="4" fill="#f7f7f7" />
        </svg>
            Text Loop
        </span>
      </Link>
    ) 
}

export default Logo;