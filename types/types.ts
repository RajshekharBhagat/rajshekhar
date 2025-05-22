import { LucideIcon } from "lucide-react";

export type ProjectType = {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    image: string;
    liveLink: string;
    githubLink: string;
    textColor?: string;
    bg_color?: string;
    bg_from?: string;
    bg_to?: string;
    smallTextColor?: string;
    shadowColor?: string;
    Features: {
        icon: LucideIcon,
        title: string,
        description: string,
    }[],
    Technology:{
        title: string,
        link: string,
        description: string,
    }[],
}