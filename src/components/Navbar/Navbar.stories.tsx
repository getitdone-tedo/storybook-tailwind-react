import { Navbar } from './Navbar'
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LanguageMenu from '../LanguageMenu/LanguageMenu';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

export default {
    title: 'Components/UI Elements/Navbar',
    component: Navbar,
} as ComponentMeta<typeof Navbar>;

const menuData = [
    "English",
    "French",
    "Españolé",
    "Deutsche"
]

const menuData2 = [
    {menuTitle: "Menu one", href: "#"},
    {menuTitle: "Menu two", href: "#"},
    {menuTitle: "Menu three", href: "#"},
    {menuTitle: "Menu four", href: "#"},
]

export const WithLanguageMenu = () =>
<Navbar>
    <LanguageMenu menuData={menuData}/>
</Navbar>;

export const WithHamburgerMenu = () =>
<Navbar>
    <HamburgerMenu menuData={menuData2}/>
</Navbar>;
