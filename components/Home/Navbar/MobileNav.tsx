import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';

type Props = {
    showNav: boolean;
    closeNav:() => void;
};

const MobileNav = ({closeNav, showNav}:Props) => {

    return (
        <div>
        </div>
    )
}

export default MobileNav;
