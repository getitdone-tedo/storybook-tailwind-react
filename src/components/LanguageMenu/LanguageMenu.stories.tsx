import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react'
import LanguageMenu from './LanguageMenu';

export default {
    title: 'Components/UI Elements/LanguageMenu',
    component: LanguageMenu,
    } as ComponentMeta<typeof LanguageMenu>;
    
    
    const Template: ComponentStory<typeof LanguageMenu> = (args) => <LanguageMenu {...args} />;
    
    export const MenuAvatar = Template.bind({});
    MenuAvatar.args = {
        menuData: [
            {menuTitle: "English", href: "#"},
            {menuTitle: "French", href: "#"},
            {menuTitle: "Españolé", href: "#"},
            {menuTitle: "Deutsche", href: "#"},
        ]
    };