import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/info";
import Shapes from '../home/Shapes';

export default function About() {
    const firstName = info.firstName.toLowerCase();

    function aboutMeText() {
        return (
            <>
                <p><span style={{ color: info.baseColor }}> $</span> cat about{firstName} </p>
                <p><span style={{ color: info.baseColor }}>about{firstName} <span className={Style.green}>(main)</span> $ </span>{info.bio}</p>
            </>
        );
    }

    function skillsText() {
        const proficientWith = info.skills?.proficientWith || [];
        const exposedTo = info.skills?.exposedTo || [];
        
        return (
            <>
                <p><span style={{ color: info.baseColor }}> $</span> cd skills/tools </p>
                <p><span style={{ color: info.baseColor }}>skills/tools <span className={Style.green}>(main)</span> $</span> ls</p>
                <p style={{ color: info.baseColor }}> Proficient With</p>
                <ul className={Style.skills}>
                    {proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
                </ul>
                <ul className={Style.skills}>
                    {exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
                </ul>
            </>
        );
    }
    

    function miscText() {
        return (
            <>
                <p><span style={{ color: info.baseColor }}>$</span> cd hobbies/interests</p>
                <p><span style={{ color: info.baseColor }}>hobbies/interests <span className={Style.green}>(main)</span> $</span> ls</p>
                <ul>
                    {info.hobbies.map((hobby, index) => (
                        <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                    ))}
                </ul>
            </>
        );
    }

    return (
        <div>
            <Shapes />
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
        </div>
    );
}
