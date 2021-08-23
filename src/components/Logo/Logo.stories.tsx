import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Logo } from "./Logo";

export default {
    title: 'Components/UI Elements/Logo',
    component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Logo_Default = Template.bind({});
Logo_Default.args = {
    src: "E2E_LOGO.png",
    alt: "E2E Group Logo",
    href: "/"
};