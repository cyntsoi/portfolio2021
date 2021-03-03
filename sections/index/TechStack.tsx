import React,{FC, Fragment, useState} from "react";
import {AspectRatio, Box, Container, Grid, GridItem, Heading, Icon, Text} from "@chakra-ui/react";
import {technologies} from "../../__mocks__/technologies";
import Icons from "../../components/icons/dev";
import {Button} from "../../components/Button";
import {Technology} from "../../types/technology";

export interface IProps{
    subheading?: string;
    body?:string;
    technologies?: Array<Technology>;
}

const TechStack: FC<IProps> = ({subheading, body, technologies}) => {
    const [active,setActive] = useState<number|null>(null);
    return <Box as="section" id="tech-stack" className="bg-tint">
        <Container pt={{md: 36, base: 20,}} pb={{md: 44, base: 12}}>
            <Grid templateColumns="repeat(12, 1fr)" autoFlow="row dense" gap={8} px={{md:4, lg:0}}>
                <GridItem colStart={{base:2,md:3, lg:4}} colSpan={{base: 10, md: 8,lg: 6}} textAlign="center">
                    <Heading as="p" variant="subheading" mb={{base:14,md: 28}} >{subheading}</Heading>
                    <Text variant="emphasis">{body}</Text>
                </GridItem>
                <GridItem colSpan={12} mt="16">
                    <Grid templateColumns="repeat(24, 1fr)" autoFlow="row dense"  gap={0}>
                        {technologies.map(tech => {
                            const IconComponent = Icons[tech.icon] ? Icons[tech.icon]  : Icon;
                            const isActive = active === tech.id;
                            return <Fragment key={tech.id}>
                                <GridItem as="article" opacity={isActive? .2 : 1} colSpan={{base:8, md: 4, lg:3}} onMouseEnter={() => setActive(tech.id)}>
                                    <AspectRatio maxWidth="3rem" mx="auto" pt={10} pb={3} ratio={1}><IconComponent /></AspectRatio>
                                    <Text variant="emphasis" textAlign="center" fontSize="sm" lineHeight={1.1} pb={5}>{tech.shortName ? tech.shortName : tech.name}</Text>
                                </GridItem>
                                {isActive  && <GridItem colSpan={24}>
                                    <Grid templateColumns="repeat(8, 1fr)" autoFlow="row dense" pt={24} pb={28} textAlign="center" gap={0}>
                                        <GridItem colStart={{base:2, md:3}} colSpan={{base:6,md:4}}>
                                            <Heading as="h2" size="sm" mb={6}>{tech.name}</Heading>
                                            <Text>{tech.description}</Text>
                                            {tech.hasProjects && <Button  mt={10}>View {tech.shortName ? tech.shortName : tech.name} Projects</Button>}
                                        </GridItem>
                                    </Grid>
                                </GridItem>
                                }
                            </Fragment>
                        })}
                    </Grid>
                </GridItem>
            </Grid>
        </Container>
    </Box>
}

TechStack.defaultProps = {
    subheading: "This is a quick summary of my stack. This is a quick summary of my stack. This is a quick summary of my stack. This is a quick summary of my stack. This is a quick summary of my stack.",
    body: "See below for a list of my favourite technologies",
    technologies
}

export default TechStack
