
export type FooterItem = {
    name: string;
    url?: string;
}

export type FooterProps = {
    backgroundColor?: string;
    textColor?: string;
    linkColor?: string;
    logoSrc: string;
    items: FooterItem[]; 
}