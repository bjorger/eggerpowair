import StoryblokClient from "storyblok-js-client";

export enum NewsCategories {
    all = "",
    power_plants = "Kraftwerke",
    industrial_plants = "Industrieanlagen",
    waste_incinerator = "Müllverbrennungsanlagen",
    generators = "Generatoren",
    conveyor_systems = "Förderanlagen",
}
export interface NewsArticle {
    preview_image: { filename: string; alt: string };
    author: string;
    date: string;
    headline: string;
    preview_text: string;
    text: RichtextType;
}

interface Story {
    content: NewsArticle;
}

export interface RichtextType {
    type: string;
    content: Array<{ text: string; type: string }>;
}

let Storyblok = new StoryblokClient({
    accessToken: process.env.REACT_APP_STORYBLOK_API_KEY,
    cache: {
        clear: "auto",
        type: "memory",
    },
});

export const getPaginatedNewsArticles = async (category: string = "", page: number = 1, per_page: number = 12): Promise<Array<NewsArticle>> => {
    try {
        const stories = await Storyblok.get("cdn/stories/", {
            version: "published",
            per_page,
            page,
            starts_with: `news_articles/${category}`,
        });

        console.log(stories);

        const articles: NewsArticle[] = [];

        stories.data.stories.forEach(({ content }: Story) => {
            const { preview_image, author, date, headline, preview_text, text } = content;

            articles.push({
                preview_image,
                author,
                date,
                headline,
                preview_text,
                text,
            });
        });

        return articles;
    } catch (e) {
        throw new Error("Couldn't load story");
    }
};
