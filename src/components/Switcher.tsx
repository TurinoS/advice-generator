'use client'

import styled from 'styled-components';
import Switch from 'react-switch';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs'
import { useTheme } from '@/contexts/ThemeContext';

const ThemeSwitcher = styled.div`
    position: absolute;
    top: 5vh;
    left: 87.5vw;
    transform: scale(1.2);

    @media (max-width: 600px) {
        left: 80vw;
    }
`

const SunIcon = styled(BsSunFill)`
    color: ${props => props.theme.colors.darkGrayishBlue};
    font-size: 20px;
    position: relative;
    top: 3px;
    left: 5px;
`

const MoonIcon = styled(BsMoonStarsFill)`
    color: ${props => props.theme.colors.darkBlue};
    font-size: 20px;
    position: relative;
    top: 3px;
    left: 4px;
`

export default function Switcher() {
    const { theme ,toggleTheme } = useTheme()
    return(
        <ThemeSwitcher>
            <Switch 
                onChange={toggleTheme}
                checked={theme.title === "dark" && true}
                checkedIcon={<SunIcon/>}
                uncheckedIcon={<MoonIcon/>}
                offColor={theme.colors.neonGreen}
                onColor={theme.colors.neonGreen}
            />
        </ThemeSwitcher>
    )
}