export interface Technology{
    id: number,
    name: string,
    slug: string,
    shortName?: string,
    icon?: string,
    description: string,
    hasProjects?: boolean,
    url?: string,
}