export type ContactInput = {
    name: string;
    email: string;
    message: string;
    placeholder?: string;
}

export type ContactSocialItem = {
    platform: string;
    url: string;
    iconSrc?: string;
    brandColor?: string;
    bgColor?: string;
}

export type ContactButton = {
    text: string;
    backgroundColor?: string;
    textColor?: string;
}

export type ContactMeProps = {
    contactEmail: string;
    backgroundColor?: string;
    inputs?: ContactInput[];
    socialLinks?: ContactSocialItem[];
    titleColor?: string;
    descriptionColor?: string;
    title?: string;
    description?: string;
    phoneNumber?: string;
    emailAddress?: string;
    button?: ContactButton;
}