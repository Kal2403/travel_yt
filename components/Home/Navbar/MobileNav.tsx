import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';

type Props = {
    showNav: boolean;
    closeNav:() => void;
};

const MobileNav = ({closeNav, showNav}:Props) => {

    const navOpen = showNav?"translate-x-0":"translate-x-[-100%]"

    return (
        <div>
        </div>
    )
}

export default MobileNav;
