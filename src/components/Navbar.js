import React from 'react';
import { Navbar } from '@theme'

const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo src="/img/logo.png" alt="TruBudget Logo" />
            <NavLinks>
                <NavLink><a href='https://trubudget.net/docs/' >Documentation</a></NavLink>
                <NavLink><a href='https://github.com/openkfw/TruBudget/discussions'>Community</a></NavLink>
                <NavLink></NavLink>
            </NavLinks>
        </NavbarContainer>
    )
}