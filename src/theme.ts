import { css, FlattenInterpolation, SimpleInterpolation, ThemeProps } from "styled-components/macro";

interface Breakpoints {
    sm: number;
    md: number;
    lg: number;
    xl: number;
}

interface Palette {
    dark: string;
    blue: string;
    orange: string;
    white: string;
    black: string;
    light: string;
    grey: string;
    grey2: string;
    yellow: string;
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
    paragraphSmall: FlattenInterpolation<ThemeProps<any>>;
    h2: FlattenInterpolation<ThemeProps<any>>;

    gridItem: {
        number: FlattenInterpolation<ThemeProps<any>>;
    };
    projectItem: {
        headline: SimpleInterpolation;
    };
    footer: {
        paragraph: FlattenInterpolation<ThemeProps<any>>;
    };
    mobileTile: {
        number: SimpleInterpolation;
        headline: SimpleInterpolation;
        paragraph: SimpleInterpolation;
    };
}

interface Theme {
    breakpoints: Breakpoints;
    palette: Palette;
    fonts: Fonts;
    borderBottom: SimpleInterpolation;
    borderTop: SimpleInterpolation;
}

const breakpoints: Breakpoints = {
    sm: 600,
    md: 960,
    lg: 1460,
    xl: 1600,
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
        grey: "#979797",
        grey2: "#F2F2F2",
        yellow: "#FFC631",
    },
    fonts: {
        headline: {
            main: css`
                font-size: 36px;
                line-height: 36px;
                font-weight: 700;

                @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
                    font-size: 48px;
                    line-height: 55px;
                }
            `,
            eyebrow: css`
                font-size: 12px;
                line-height: 24px;
                font-weight: 600;

                @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
                    font-size: 18px;
                    line-height: 23px;
                }
            `,
        },
        button: css`
            font-size: 12px;
            line-height: 16px;
            font-weight: 600;

            @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
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

            @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
                font-size: 19px;
                line-height: 28px;
                font-weight: 200;
            }
        `,
        paragraphSmall: css`
            font-size: 10px;
            line-height: 20px;

            @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
                font-size: 14px;
                line-height: 23px;
                font-weight: 200;
            }
        `,
        h2: css`
            font-size: 16px;
            line-height: 20px;
            font-weight: 700;

            @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
                font-size: 26px;
                line-height: 31px;
            }
        `,
        gridItem: {
            number: css`
                font-size: 20px;
                line-height: 12px;
                font-weight: 800;

                @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
                    font-size: 48px;
                    line-height: 55px;
                }
            `,
        },
        projectItem: {
            headline: css`
                font-size: 30px;
                line-height: 40px;
                font-weight: 700;
            `,
        },
        footer: {
            paragraph: css`
                font-size: 12px;
                line-height: 24px;
                font-weight: 400;

                @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
                    font-size: 16px;
                    line-height: 23px;
                }
            `,
        },
        mobileTile: {
            number: css`
                font-size: 20px;
                line-height: 12px;
            `,
            headline: css`
                font-size: 14px;
                line-height: 14px;
            `,
            paragraph: css`
                font-size: 12px;
                line-height: 12px;
            `,
        },
    },
    borderBottom: css`
        border-bottom: 1px solid #a7a7a7;
    `,
    borderTop: css`
        border-top: 1px solid #a7a7a7;
    `,
};

export default theme;
