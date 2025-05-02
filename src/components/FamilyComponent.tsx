import  {FC} from 'react';
import {CharacterComponent} from "./CharacterComponent.tsx";
import {simpsons} from "../data/arrays.tsx";

const FamilyComponent: FC   = () => {
    return (
        <div>
            {
                simpsons.map((value, index)=> <CharacterComponent family = {value} key = {index} />)
            }
        </div>
    );
};

export default FamilyComponent;