import React from 'react';
import Style from "../../components/about/Terminal.module.scss";
import classNames from "classnames";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';



function Terminal(props) {
    const { text } = props;

    return (
        <Box component={'section'} className={classNames(Style.terminal, Style.shadowed, Style.terminalAbout)}
             width={{xs: '100%', md: '70%'}} borderRadius={'0.5rem'} mb={'4rem'}>
            <Box sx={{ backgroundColor: '#bfdbfe' }} p={'0.5rem'} borderRadius={'0.5rem 0.5rem 0 0'}
                 fontSize={'1rem'}>
            </Box>
            <Box py={{xs: '1rem', md: '2rem'}} px={{xs: '2rem', md: '3rem'}} borderRadius={'0 0 0.5rem 0.5rem'}
                 sx={{ backgroundColor: '#27242f' }} fontSize={'1.5rem'} fontFamily={'Courier New, Courier, monospace'}>
                {text}
            </Box>
        </Box>
    );
}

export default Terminal;
