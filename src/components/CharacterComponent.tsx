import {FC, ReactNode} from 'react';
import {ICharacter} from "../models/Character.tsx";

type CharacterComponentProps = {family: ICharacter, children: ReactNode};

export const CharacterComponent: FC <CharacterComponentProps> = ({family, children}) => {
    return (
        <div>
            <h1 className='font-bold mb-5'>{family.name} {family.surname} age {family.age} </h1>
            <p className=''>{family.info}</p>
            <img src={`${children}`} alt={`${family.name} ${family.surname}`}/>

        </div>
    );
};



