import {
    css,
    FlattenInterpolation,
    SimpleInterpolation,
    ThemeProps,
} from "styled-components/macro";

interface Breakpoints {
    md: number;
    lg: number;
}

interface Palette {
    dark: string;
    blue: string;
    orange: string;
    white: string;
    black: string;
    light: string;
}

interface Fonts {
    headline: {
        eyebrow: FlattenInterpolation<ThemeProps<any>>;
        main: FlattenInterpolation<ThemeProps<any>>;
    };
    button: FlattenInterpolation<ThemeProps<any>>;
    header: {
        link: SimpleInterpolation;
    };
    paragraph: FlattenInterpolation<ThemeProps<any>>;
    h2: SimpleInterpolation;

    gridItem: {
        number: SimpleInterpolation;
    };
    projectItem: {
        headline: SimpleInterpolation;
    };
}

interface Theme {
    breakpoints: Breakpoints;
    palette: Palette;
    fonts: Fonts;
    borderBottom: SimpleInterpolation;
}

const breakpoints: Breakpoints = {
    md: 960,
    lg: 1200,
};

const theme: Theme = {
    breakpoints,
    palette: {
        dark: "#232527",
        blue: "#47BCC7",
        orange: "#FB993C",
        white: "#FFFFFF",
        black: "#000000",
        light: "#A9A9A9",
    },
    fonts: {
        headline: {
            main: css`
                font-size: 36px;
                line-height: 36px;
                font-weight: 700;

                @media screen and (min-width: ${({ theme }) =>
                        `${theme.breakpoints.md}px`}) {
                    font-size: 48px;
                    line-height: 55px;
                }
            `,
            eyebrow: css`
                font-size: 12px;
                line-height: 24px;
                font-weight: 600;

                @media screen and (min-width: ${({ theme }) =>
                        `${theme.breakpoints.md}px`}) {
                    font-size: 18px;
                    line-height: 23px;
                }
            `,
        },
        button: css`
            font-size: 12px;
            line-height: 24px;
            font-weight: 600;

            @media screen and (min-width: ${({ theme }) =>
                    `${theme.breakpoints.md}px`}) {
                font-size: 18px;
                line-height: 23px;
            }
        `,
        header: {
            link: css`
                font-size: 14px;
                line-height: 22px;
                font-weight: 600;
            `,
        },
        paragraph: css`
            font-size: 12px;
            line-height: 24px;

            @media screen and (min-width: ${({ theme }) =>
                    `${theme.breakpoints.md}px`}) {
                font-size: 19px;
                line-height: 28px;
                font-weight: 200;
            }
        `,
        h2: css`
            font-size: 26px;
            line-height: 31px;
            font-weight: 700;
        `,
        gridItem: {
            number: css`
                font-size: 48px;
                line-height: 55px;
                font-weight: 800;
            `,
        },
        projectItem: {
            headline: css`
                font-size: 30px;
                line-height: 40px;
                font-weight: 700;
            `,
        },
    },
    borderBottom: css`
        border-bottom: 1px solid #a9a9a9;
    `,
};

export default theme;
