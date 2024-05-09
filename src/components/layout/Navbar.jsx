import React, { useState } from 'react';
import Style from '../layout/Navbar.module.scss';
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { info } from "../../info/info";

const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'About Me',
        to: '/about',
        active: 'about'
    },
    {
        name: 'Portfolio',
        to: '/portfolio',
        active: 'portfolio'
    },
    {
        name: 'Contact',
        to: '/contact',
        active: 'contact'
    }
];

export default function Navbar() {
    const location = useLocation();
    const active = location.pathname === '/' ? 'home' : location.pathname.slice(1);

    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{ xs: '2rem', md: '8rem' }}
                 textTransform={'lowercase'} fontSize={'1rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={link.active === active && Style.active}
                         sx={{ borderImageSource: info.gradient }}>
                        <Link to={link.to} className={Style.link}>
                            {!link.type && <p style={{ padding: '0.5rem 0' }}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
