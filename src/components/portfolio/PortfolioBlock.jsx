import React from 'react';
import { Box } from "@mui/material";
import Shapes from '../home/Shapes';
import img from '../../img/mock1.png';

function PortfolioBlock(props) {
    const { title } = props;

    return (
        <div>
            <Shapes />
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <img src={img} alt={'mockup'} style={{ width: '800px', height: '100%', objectFit: 'cover', overflow: 'hidden' }} />
                <h1 style={{ fontSize: '2rem' }}>{title}</h1>
                <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
                    alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
                    <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                        <a href="https://giphy-api-dedeepncs-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-safari" /> Live Demo
                        </a>
                    </Box>
                    <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                        <a href="https://github.com/dedeepnc/Giphy-API" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-code" /> Source Code
                        </a>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default PortfolioBlock;
