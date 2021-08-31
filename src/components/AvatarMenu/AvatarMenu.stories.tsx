import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react'
import AvatarMenu from './AvatarMenu';

export default {
    title: 'Components/UI Elements/AvatarMenu',
    component: AvatarMenu,
    } as ComponentMeta<typeof AvatarMenu>;
    
    
    const Template: ComponentStory<typeof AvatarMenu> = (args) => <AvatarMenu {...args} />;
    
    export const AvatarMenuDefault = Template.bind({});
    AvatarMenuDefault.args = {
        menuData: [
            {menuTitle: "Menu one", href: "#"},
            {menuTitle: "Menu two", href: "#"},
            {menuTitle: "Menu three", href: "#"},
            {menuTitle: "Menu four", href: "#"},
        ]
    };