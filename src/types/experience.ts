export type ExperienceItem = {
    company: string;
    companyLogoSrc?: string;
    role: string;
    startDate: string;
    endDate?: string;
    description?: string;
}

export type ExperienceProps = {
    experiences: ExperienceItem[];
    backgroundColor?: string;
    titleColor?: string;
    borderColor?: string;
    descriptionColor?: string;
}