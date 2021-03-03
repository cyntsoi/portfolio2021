import {FC, PropsWithChildren, ReactNode} from "react";
import {Header} from "./Header";
import {chakra} from "@chakra-ui/react";
import {VStack} from "@chakra-ui/layout";
import {Footer} from "./Footer";
import {ScrollPositionProvider} from "../hooks/useScrollPosition";
import SkipLink from "./SkipLink";

export const Layout: FC<PropsWithChildren<{ BeforeHeader?: ReactNode }>> = ({BeforeHeader, children}) => {
    return <ScrollPositionProvider>
        <SkipLink/>
        <VStack minHeight="100vh" w="100%" spacing={0}>
            {BeforeHeader}
            <Header/>
            <chakra.div id="content" w="100%" >
                {children}
            </chakra.div>
            <Footer/>
        </VStack>
    </ScrollPositionProvider>
}