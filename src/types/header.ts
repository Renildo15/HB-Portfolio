export type HeaderMenuItem = {
    label: string;
    href: string;
    textColor?: string;
    order?: number;
}

export type HeaderButton = {
    label: string;
    href: string;
    icon?: string;
    bgColor?: string;
    textColor?: string;
}

export type HeaderProps = {
    logoSrc: string;
    menuItems: HeaderMenuItem[];
    button: HeaderButton;
}