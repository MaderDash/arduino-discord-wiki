//https://vitepress.vuejs.org/config/theme-configs
//https://vitepress.vuejs.org/guide/theme-nav#navigation-links

//import MyLayout from '../../vue/MyLayout.vue'

const theme = {
    logo: {
        light: '/logo/arduino_logo.gif', dark: '/logo/arduino_logo.gif', alt: 'Arduino Logo'
    },
    siteTitle: 'Arduino Discord Wiki ',
    /* Note the footer will not show when sidebar is active */
    footer: {
        message: "Released under the MIT License.",
        copyright: "Copyright © 2022-present Arduino",
    },
    nav: [
        {
            text: 'About',
            items: [
                { text: 'About Us', link: '/about' },
                { text: 'Development Road Map', link: '/dev_roadmap' },
            ]
        },
        { text: "Contact", link: "/contact" },
    ],
    sidebar: [
        {
            text: "Getting Started",
            collapsible: true,
            items: [
                { text: "Introduction", link: "/gettingStarted/basicsOfProgramming" },
            ],
        },
        {
            text: "Code Guides",
            collapsible: true,
            items: [
                { text: "Combining Sketches", link: "/codeGuides/combiningSketches" },
                { text: "Millis vs Delay", link: "/codeGuides/millisVsDelay" },
            ],
        },
        {
            text: "Hardware Guides",
            collapsible: true,
            items: [
                { text: "BreadBoards", link: "/hardwareGuides/breadBoard" },
                { text: "Buttons", link: "/hardwareGuides/buttons" },
                { text: "Resistors", link: "/hardwareGuides/ledResistors" },
                { text: "Nine Volts", link: "/hardwareGuides/nineVolts" },

            ],
        }
    ],
    socialLinks: [
        { icon: 'github', link: 'https://github.com/arduinodiscord/wiki' },
        { icon: 'discord', link: 'https://discord.gg/arduino' }
    ]
}

const ThemeSettings = {}

export { theme, ThemeSettings }