import React from "react";
import {Main} from '../components/Main'
import {Layout} from "../components/Layout";
import {NextPage} from "next";
import {TopBanner} from "../components/TopBanner";

/* Page Sections */
import HeroSection, {IProps as HeroProps} from "../sections/index/Hero"
import TechStackSection, {IProps as TechStackProps} from "../sections/index/TechStack"


interface PageProps {
    topBannerText: string
    heroProps?: HeroProps
    techStackProps?: TechStackProps
}

const Index: NextPage<PageProps> = ({topBannerText}) => (
    <Layout BeforeHeader={topBannerText ? <TopBanner html={topBannerText}/> : ""}>
        <Main>
            <HeroSection/>
            <TechStackSection/>
        </Main>
    </Layout>
)

Index.getInitialProps = async () => {
    return {
        topBannerText: "<span style='font-weight: 500;'>Lorem Ipsum</span> I am happy to see you."
    }
}

export default Index