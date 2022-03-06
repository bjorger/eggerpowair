import StoryblokClient from "storyblok-js-client";

export enum NewsCategories {
    all = "",
    power_plants = "Kraftwerke",
    industrial_plants = "Industrieanlagen",
    waste_incinerator = "Müllverbrennungsanlagen",
    generators = "Generatoren",
    conveyor_systems = "Förderanlagen",
}
export interface NewsArticleType {
    id: number;
    image: { filename: string; alt: string };
    author: string;
    date: string;
    headline: string;
    preview_text: string;
    text: RichtextType;
}

interface Story {
    id: number;
    content: NewsArticleType;
}

export interface RichtextType {
    type: string;
    content: Array<{ text: string; type: string }>;
}

interface PaginatedResponse {
    total: number;
    articles: Array<NewsArticleType>;
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
        const stories = await Storyblok.get("cdn/stories/", {
            version: "published",
            per_page,
            page,
            starts_with: `news_articles/${category}`,
            sort_by: "first_published_at:desc",
        });

        const total = Math.ceil(stories.headers.total / per_page);
        const articles: NewsArticleType[] = [];

        stories.data.stories.forEach(({ id, content }: Story) => {
            const { image, author, date, headline, preview_text, text } = content;

            articles.push({
                id,
                image,
                author,
                date,
                headline,
                preview_text,
                text,
            });
        });

        return { total, articles };
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
