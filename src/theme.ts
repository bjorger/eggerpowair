interface Breakpoints {
    md: number;
    lg: number;
}

interface Palette {
    main: string;
    blue: string;
    orange: string;
    white: string;
}

interface Font {
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
}

interface Fonts {
    headline: {
        top: Font;
        main: Font;
    };
    header: {
        link: Font;
    };
    stage: {
        headlineTop: Font;
        headlineMain: Font;
        paragraph: Font;
        button: Font;
    };
    whatWeDo: {
        number: Font;
        headline: Font;
        description: Font;
    };
}

interface Theme {
    breakpoints: Breakpoints;
    palette: Palette;
    fontSizes: Fonts;
}

const theme: Theme = {
    breakpoints: {
        md: 960,
        lg: 1200,
    },
    palette: {
        main: "#232527",
        blue: "#47BCC7",
        orange: "#FB993C",
        white: "#FFFFFF",
    },
    fontSizes: {
        headline: {
            main: {
                fontSize: "48px",
                lineHeight: "55px",
                fontWeight: 700,
            },
            top: {
                fontSize: "18px",
                lineHeight: "23px",
                fontWeight: 600,
            },
        },
        header: {
            link: {
                fontSize: "14px",
                lineHeight: "22px",
                fontWeight: 600,
            },
        },
        stage: {
            headlineTop: {
                fontSize: "18px",
                lineHeight: "28px",
                fontWeight: 600,
            },
            headlineMain: {
                fontSize: "58px",
                lineHeight: "60px",
                fontWeight: 800,
            },
            paragraph: {
                fontSize: "19px",
                lineHeight: "28px",
                fontWeight: 200,
            },
            button: {
                fontSize: "18px",
                lineHeight: "23px",
                fontWeight: 600,
            },
        },
        whatWeDo: {
            description: {
                fontSize: "19px",
                fontWeight: 400,
                lineHeight: "28px",
            },
            headline: {
                fontSize: "26px",
                fontWeight: 700,
                lineHeight: "31px",
            },
            number: {
                fontSize: "48px",
                lineHeight: "55px",
                fontWeight: 800,
            },
        },
    },
};

export default theme;
