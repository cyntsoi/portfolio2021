import React, {FC, PropsWithChildren} from "react"
import Link from "next/link";
import {VisuallyHidden, useStyleConfig} from "@chakra-ui/react"
import {InvertColorMode} from "./utils/InvertColorMode";

const Inner: FC<{ href?: string }> = ({href}) => {
    const styles = useStyleConfig("SkipLink")
    return <VisuallyHidden href={href} as="a" sx={styles}>Skip to Content</VisuallyHidden>
}

const SkipLink: FC<PropsWithChildren<{}>> = () => {
    return <InvertColorMode>
        <Link href="#content" passHref>
            <Inner/>
        </Link>
    </InvertColorMode>
}

export default SkipLink