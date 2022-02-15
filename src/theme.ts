import { css, SimpleInterpolation } from "styled-components/macro";

interface Breakpoints {
    md: number;
    lg: number;
}

interface Palette {
    main: string;
    blue: string;
    orange: string;
    white: string;
    black: string;
}

interface Fonts {
    headline: {
        eyebrow: SimpleInterpolation;
        main: SimpleInterpolation;
    };
    button: SimpleInterpolation;
    header: {
        link: SimpleInterpolation;
    };
    stage: {
        paragraph: SimpleInterpolation;
    };
    whatWeDo: {
        number: SimpleInterpolation;
        headline: SimpleInterpolation;
        description: SimpleInterpolation;
    };
    projectItem: {
        headline: SimpleInterpolation;
        description: SimpleInterpolation;
    };
}

interface Theme {
    breakpoints: Breakpoints;
    palette: Palette;
    fonts: Fonts;
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
        black: "#000000",
    },
    fonts: {
        headline: {
            main: css`
                font-size: 48px;
                line-height: 55px;
                font-weight: 700;
            `,
            eyebrow: css`
                font-size: 18px;
                line-height: 23px;
                font-weight: 600;
            `,
        },
        button: css`
            font-size: 18px;
            line-height: 23px;
            font-weight: 600;
        `,
        header: {
            link: css`
                font-size: 14px;
                line-height: 22px;
                font-weight: 600;
            `,
        },
        stage: {
            paragraph: css`
                font-size: 19px;
                line-height: 28px;
                font-weight: 200;
            `,
        },
        whatWeDo: {
            description: css`
                font-size: 19px;
                line-height: 28px;
                font-weight: 400;
            `,
            headline: css`
                font-size: 26px;
                line-height: 31px;
                font-weight: 700;
            `,
            number: css`
                font-size: 48px;
                line-height: 55px;
                font-weight: 800;
            `,
        },
        projectItem: {
            description: css`
                font-size: 19px;
                line-height: 28px;
                font-weight: 400;
            `,
            headline: css`
                font-size: 30px;
                line-height: 40px;
                font-weight: 700;
            `,
        },
    },
};

export default theme;
