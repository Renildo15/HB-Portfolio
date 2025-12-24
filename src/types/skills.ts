export type SkillItem = {
    iconSrc: string;
    name: string;
    color?: string;
    backgroundColor?: string;
}

export type SkillsProps = {
    skills: SkillItem[];
}