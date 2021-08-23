import { storiesOf } from "@storybook/react";
import { Button } from "./Button";

const stories = storiesOf("Components/UI Elements/Button", module);
stories.add("All Button Variations", () => {
    return (
        <div className="items-center">
            <h1 className="text-white p-2 text-lg bg-green-600 text-center">Buttons - Some information about the buttons</h1><br />
            <h2 className="bg-green-300 p-2">Button small variations</h2><br />
            <div className="flex justify-around items-center">
                <Button 
                    color={"primary"}
                    text={"Button..."}
                    label={"primary button"}
                    buttonSize={"small"}
                    disabled={false}
                />
                <Button 
                    color={"secondary"}
                    text={"Button..."}
                    label={"primary button"}
                    buttonSize={"small"}
                    disabled={false}
                />
                <Button 
                    color={"tertiary"}
                    text={"Button..."}
                    label={"primary button"}
                    buttonSize={"small"}
                    disabled={false}
                />
                <Button 
                    color={"disabled"}
                    text={"Button..."}
                    label={"primary button"}
                    buttonSize={"small"}
                    disabled={false}
                />
            </div>
            <br /><h2 className="bg-green-300 p-2">Button medium variations</h2><br />
            <div className="flex justify-around items-center">
                <Button 
                    color={"primary"}
                    text={"Button..."}
                    label={"primary button"}
                    buttonSize={"medium"}
                    disabled={false}
                />
                <Button 
                    color={"secondary"}
                    text={"Button..."}
                    label={"primary button"}
                    buttonSize={"medium"}
                    disabled={false}
                />
                <Button 
                    color={"tertiary"}
                    text={"Button..."}
                    label={"primary button"}
                    buttonSize={"medium"}
                    disabled={false}
                />
                <Button 
                    color={"disabled"}
                    text={"Button..."}
                    label={"primary button"}
                    buttonSize={"medium"}
                    disabled={false}
                />
            </div>

            <br /><h2 className="bg-green-300 p-2">Button large variations</h2><br />
            <div className="flex justify-around items-center">
                <Button 
                    color={"primary"}
                    text={"Button..."}
                    label={"primary button"}
                    buttonSize={"large"}
                    disabled={false}
                />
                <Button 
                    color={"secondary"}
                    text={"Button..."}
                    label={"primary button"}
                    buttonSize={"large"}
                    disabled={false}
                />
                <Button 
                    color={"tertiary"}
                    text={"Button..."}
                    label={"primary button"}
                    buttonSize={"large"}
                    disabled={false}
                />
                <Button 
                    color={"disabled"}
                    text={"Button..."}
                    label={"primary button"}
                    buttonSize={"large"}
                    disabled={false}
                />
            </div>
           
        </div>
    );
});