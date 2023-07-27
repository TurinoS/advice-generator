import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string
        colors: {
            lightCyan: string
            neonGreenFont: string,
            neonGreen: string
            neonGreenShadow: string
            grayishBlue: string
            darkGrayishBlue: string
            darkBlue: string
        }
    }
}