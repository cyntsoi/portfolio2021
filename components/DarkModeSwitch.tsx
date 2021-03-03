import {useColorMode, Switch, Box, BoxProps,AspectRatio} from '@chakra-ui/react'
import Icons from './icons/';
import {FC} from "react";
import {InvertColorMode} from "./utils/InvertColorMode";
import {colorMode} from "../theme/foundations/colors";

const DarkModeSwitchInner : FC<BoxProps> = (boxProps) => {
    const { colorMode: current } = useColorMode();
    return <Box as="button" bg={colorMode.background({colorMode:current})} color={colorMode.body({colorMode:current})} _hover={{bg:colorMode.tint({colorMode:current})}} {...boxProps} >{current === 'dark' ?   <Icons.MoonIcon/> : <Icons.SunIcon /> }</Box>;
}

export const DarkModeSwitch : FC<BoxProps> = (boxProps) => {
    const { toggleColorMode } = useColorMode(); // pass toggleColorMode as the onClick value outside InvertColorMode
    return (
            <InvertColorMode >
                <DarkModeSwitchInner {...boxProps} onClick={toggleColorMode}  />
            </InvertColorMode>
    )
}