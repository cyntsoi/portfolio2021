import {mode} from "@chakra-ui/theme-tools";

export default {
    gray:{
        "100": "#F8F8F8",
        "200": "#DEDEDE",
        "600": "#404040"
    },
    body:"gray.600",
    black: '#1f1f1f',
}

export const colorMode = {
    title: mode("gray.600", "white"),
    body: mode("black", "white"),
    tint: mode( "gray.100", "gray.700"),
    background: mode( "white", "gray.800"),
    border:  mode( "gray.200", "gray.700"),
    white: mode( "white", "gray.800")
}