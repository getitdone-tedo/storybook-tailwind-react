import { ComponentMeta, ComponentStory } from '@storybook/react';
import HamburgerMenu from "./HamburgerMenu";
import React from 'react'

export default {
    title: 'Components/UI Elements/HamburgerMenu',
    component: HamburgerMenu,
    } as ComponentMeta<typeof HamburgerMenu>;
    
    
    const Template: ComponentStory<typeof HamburgerMenu> = (args) => <HamburgerMenu {...args} />;
    
    export const MenuAvatar = Template.bind({});
    MenuAvatar.args = {
        menuData: [
            {menuTitle: "Menu one", href: "#"},
            {menuTitle: "Menu two", href: "#"},
            {menuTitle: "Menu three", href: "#"},
            {menuTitle: "Menu four", href: "#"},
        ]
    };