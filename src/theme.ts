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

interface FontSize {
    fontSize: string;
    lineHeight: string;
}

interface FontSizes {
    header: {
        link: FontSize;
    };
}

interface Theme {
    breakpoints: Breakpoints;
    palette: Palette;
    fontSizes: FontSizes;
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
        header: {
            link: {
                fontSize: "14px",
                lineHeight: "22px",
            },
        },
    },
};

export default theme;
