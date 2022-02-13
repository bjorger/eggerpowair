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

interface Theme {
    breakpoints: Breakpoints;
    palette: Palette;
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
};

export default theme;
