import { Navbar } from './Navbar'
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Logo } from '../Logo/Logo';
import { Logo_Default } from '../Logo/Logo.stories';

export default {
    title: 'Components/UI Elements/Navbar',
    component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Empty_Navbar = Template.bind({});
Empty_Navbar.args = {
    children: Logo_Default
};
