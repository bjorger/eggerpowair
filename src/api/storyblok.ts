import StoryblokClient from "storyblok-js-client";

let Storyblok = new StoryblokClient({
    accessToken: process.env.REACT_APP_STORYBLOK_API_KEY,
    cache: {
        clear: "auto",
        type: "memory",
    },
});

export const getContent = async (): Promise<Array<any>> => {
    try {
        const blok = await Storyblok.get(`cdn/stories/buttons`, {
            version: "published",
        });

        const content: any[] = [];

        blok.data.story.content.body.forEach((blok: any) => {
            content.push({
                author: blok.author,
                experience: blok.experience,
                video: blok.video.filename,
            });
        });

        return content;
    } catch (e) {
        throw new Error("Couldn't load story");
    }
};
