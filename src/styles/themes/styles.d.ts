import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string
        colors: {
            lightCyan: string
            neonGreen: string
            grayishBlue: string
            darkGrayishBlue: string
            darkBlue: string
        }
    }
}