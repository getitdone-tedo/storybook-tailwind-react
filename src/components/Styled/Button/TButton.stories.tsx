import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import TButton from './TButton';

export default {
title: 'Styled/TButton',
component: TButton,
argTypes: {
    backgroundColor: { control: 'color' },
    propertyA: {
    options: ['Item One', 'Item Two', 'Item Three'],
    control: { type: 'select' } // Automatically inferred when 'options' is defined
    }
},
} as ComponentMeta<typeof TButton>;


const Template: ComponentStory<typeof TButton> = (args) => <TButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
    label: "Primary",
    size: "medium",
    backgroundColor: "#F36F21"
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    label: "Secondary",
    size: "large",
    backgroundColor: "white"
}

export const Small = Template.bind({});
Small.args = {
    variant: 'primary',
    label: "Small",
    size: "small",
    backgroundColor: "#F36F21"
}

export const Medium = Template.bind({});
Medium.args = {
    variant: 'primary',
    label: "Medium",
    size: "medium",
    backgroundColor: "#F36F21"
}
export const Large = Template.bind({});
Large.args = {
    variant: 'primary',
    label: "Large",
    size: "large",
    backgroundColor: "#F36F21"
}

export const Disabled = Template.bind({});
Disabled.args = {
    variant: 'primary',
    label: "Disabled",
    size: "medium",
    backgroundColor: "#949496"
}

export const Pressed = Template.bind({});
Pressed.args = {
    variant: 'primary',
    label: "Pressed",
    size: "medium",
    backgroundColor: "#BE4915"
}

export const Global3: ComponentStory<typeof TButton> = (args, { globals: { locale } }) => 
<TButton {...{ ...{
    variant: 'primary',
    size: "medium",
    backgroundColor: "#0c36f3"
}, label: locale }} />;