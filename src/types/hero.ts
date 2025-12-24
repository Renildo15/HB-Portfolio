export type HeroSocialLink = {
    platform: string;
    url: string;
    iconSrc?: string;
    brandColor?: string;
    bgColor?: string;
}

export type HeroProps = {
    title: string;
    description?: string;
    backgroundImageSrc?: string;
    backgroundImageSrcMobile?: string;
    socialLinks?: HeroSocialLink[];
    titleColor?: string;
    descriptionColor?: string;
}