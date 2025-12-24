export type ProjectItem = {
    title: string;
    description: string;
    imageSrc: string;
    projectUrl: string;
    order?: number;
}

export type ProjectProps = {
    projects: ProjectItem[];
    backgroundColor?: string;
    titleColor?: string;
    descriptionColor?: string;
}