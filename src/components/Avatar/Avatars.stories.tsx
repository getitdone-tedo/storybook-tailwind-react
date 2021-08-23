import { storiesOf } from "@storybook/react";
import { Avatar } from "./Avatar";

const stories = storiesOf("Components/UI Elements/Avatar", module);
stories.add("All Avatar Variations", () => {
    return (
        <div className="items-center">
            <h1 className="text-white p-2 text-lg bg-green-600 text-center">Avatars - Some information about the avatars</h1>
            <h2 className="bg-green-300 p-2">Avatar size variations</h2>
            <br />
            <div className="flex justify-around items-center">
                <Avatar 
                    imgSrc = {"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                    imgAlt = {"avatar profile"}
                    avatarSize = {"xsmall"}
                />
                <Avatar 
                    imgSrc = {"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                    imgAlt = {"avatar profile"}
                    avatarSize = {"small"}
                />
                <Avatar 
                    imgSrc = {"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                    imgAlt = {"avatar profile"}
                    avatarSize = {"medium"}
                />
                <Avatar 
                    imgSrc = {"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                    imgAlt = {"avatar profile"}
                    avatarSize = {"normal"}
                />
                <Avatar 
                    imgSrc = {"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                    imgAlt = {"avatar profile"}
                    avatarSize = {"large"}
                />
            </div><br />
            <h2 className="bg-green-300 p-2">Avatar profile variations</h2><br />
            <div className="flex justify-evenly items-center"> 
                <Avatar 
                    imgSrc = {"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                    imgAlt = {"avatar profile"}
                    avatarSize = {"mobile"}
                />
                <Avatar 
                    imgSrc = {"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                    imgAlt = {"avatar profile"}
                    avatarSize = {"desktop"}
                />
                </div>
        </div>
    );
});