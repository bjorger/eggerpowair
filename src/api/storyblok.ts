import { ReduxProjectCategories } from "redux/features/categories/categories";
import StoryblokClient from "storyblok-js-client";

export enum NewsCategories {
    all = "",
    paper = "Papier-Verpackungsindustrie",
    wood = "Holzerzeugnisse",
    gas = "Pellets - Trocknerabgasreinigung",
    waterpowerplants = "Wasserkraftwerke",
    waste = "Müllverbrennungsanlagen",
    biopowerplants = "Biomassekraftwerke",
    incinerators = "Nachverbrennungsanlagen",
    aluminium = "Aluminium-Erzeugung",
    cement = "Beton und Zementwerke",
    brick = "Ziegelwerke",
    mechanical = "Maschinen- und Anlagenbau",
    trains = "Zugtechnik",
    food = "Lebensmittel Industrie",
    cabinet = "Schaltschrankreinigung",
    education = "Weiterbildung",
    press = "Pressemitteilung",
}

export enum ProjectCategories {
    all = "",
    power_plants = "Kraftwerke",
    industrial_plants = "Industrieanlagen",
    waste_incinerator = "Müllverbrennungsanlagen",
    generators = "Generatoren",
    conveyor_systems = "Förderanlagen",
}

interface Image {
    filename: string;
    alt: string;
}

export interface NewsArticleType {
    id: number;
    image: Image;
    author: string;
    date: string;
    headline: string;
    preview_text: string;
    text: RichtextType;
    videoID?: string;
    category: string[];
}

export interface ProjectType {
    id: number;
    image: Image;
    text: RichtextType;
    company: string;
    category: string;
}

interface Story {
    id: number;
    content: NewsArticleType | ProjectType;
    full_slug: string;
}

export interface RichtextType {
    type: string;
    content: Array<{ text: string; type: string }>;
}

interface PaginatedResponse {
    total: number;
    items: Array<NewsArticleType | ProjectType>;
    categories: ReduxProjectCategories | NewsCategories;
}

export interface TeamMember {
    image: Image;
    name: string;
    position: string;
    linkedIn: Link;
    email: string;
    phone: string;
}

interface Link {
    cached_url: string;
    fieldtype: string;
    id: string;
    linktype: string;
    url: string;
}

export interface Job {
    title: string;
    description: RichtextType;
    skills: Array<{ title: string }>;
}

export interface Customer {
    name: string;
    image: Image;
}

let Storyblok = new StoryblokClient({
    accessToken: process.env.REACT_APP_STORYBLOK_API_KEY,
    cache: {
        clear: "auto",
        type: "memory",
    },
});

export const getPaginatedNewsArticles = async (category: string = "", page: number = 1, per_page: number = 12): Promise<PaginatedResponse> => {
    try {
        const stories = await Storyblok.get(`cdn/stories/`, {
            version: "published",
            per_page,
            page,
            starts_with: `news_articles`,
            sort_by: "first_published_at:desc",
            filter_query: {
                category: {
                    in_array: category,
                },
            },
        });

        const total = Math.ceil(stories.headers.total / per_page);
        const items: NewsArticleType[] = [];
        let categories = {};

        stories.data.stories.forEach(({ id, content, full_slug }: Story) => {
            const { image, author, date, headline, preview_text, text, videoID, category } = content as NewsArticleType;
            category.forEach((cat) => Object.assign(categories, { [cat]: true }));

            items.push({
                id,
                image,
                author,
                date,
                headline,
                preview_text,
                text,
                videoID,
                category,
            });
        });

        return { total, items, categories };
    } catch (e) {
        throw new Error("Couldn't load story");
    }
};

export const getPaginatedProjects = async (category: string = "", page: number = 1, per_page: number = 9): Promise<PaginatedResponse> => {
    try {
        const stories = await Storyblok.get("cdn/stories/", {
            version: "published",
            per_page,
            page,
            starts_with: `projects/${category}`,
            sort_by: "first_published_at:desc",
        });

        const total = Math.ceil(stories.headers.total / per_page);
        const items: ProjectType[] = [];
        let categories = {};

        stories.data.stories.forEach(({ id, content, full_slug }: Story) => {
            const { image, company, text } = content as ProjectType;
            const category = full_slug.split("/")[1];
            Object.assign(categories, { [category]: true });

            items.push({
                id,
                image,
                text,
                category,
                company,
            });
        });

        return { total, items, categories };
    } catch (e) {
        throw new Error("Couldn't load story");
    }
};

export const getNewsArticleById = async (id: string): Promise<NewsArticleType> => {
    try {
        const stories = await Storyblok.get(`cdn/stories/${id}`, {
            version: "published",
        });

        return stories.data.story.content;
    } catch (e) {
        throw new Error("Couldn't load story");
    }
};

const getStoriesByType = async (type: string): Promise<Array<TeamMember | Job | Customer>> => {
    try {
        const stories = await Storyblok.get(`cdn/stories/${type}`, {
            version: "published",
        });

        return stories.data.story.content.body;
    } catch (e) {
        throw new Error("Couldn't load story");
    }
};

export const getTeamMembers = async (): Promise<Array<TeamMember>> => {
    try {
        const stories = await getStoriesByType("team");

        return stories as Array<TeamMember>;
    } catch (e) {
        throw new Error("Couldn't load story");
    }
};

export const getJobs = async (): Promise<Array<Job>> => {
    try {
        const stories = await getStoriesByType("jobs");

        return stories as Array<Job>;
    } catch (e) {
        throw new Error("Couldn't load story");
    }
};

export const getCustomers = async (): Promise<Array<Customer>> => {
    try {
        const stories = await getStoriesByType("customers");

        return stories as Array<Customer>;
    } catch (e) {
        throw new Error("Couldn't load story");
    }
};
