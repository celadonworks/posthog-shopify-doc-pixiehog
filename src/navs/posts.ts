import { IMenu } from 'components/PostLayout/types'

export const postsMenu: IMenu[] = [
    {
        name: 'All posts',
        url: '/posts',
        icon: 'IconNewspaper',
        color: 'blue',
    },
    {
        name: 'Founders',
        url: '/founders',
        icon: 'IconRocket',
        color: 'purple',
        children: [
            {
                name: 'Being a founder',
                url: '/founders/being-a-founder',
                icon: 'IconCoffee',
                color: 'salmon',
            },
            {
                name: 'Culture',
                url: '/founders/culture',
                icon: 'IconLaptop',
                color: 'blue',
            },
            {
                name: 'Fundraising',
                url: '/founders/fundraising',
                icon: 'IconPiggyBank',
                color: 'yellow',
            },
            {
                name: 'Growth',
                url: '/founders/growth',
                icon: 'IconTrending',
                color: 'seagreen',
            },
            {
                name: 'Marketing',
                url: '/founders/marketing',
                icon: 'IconMegaphone',
                color: 'purple',
            },
            {
                name: 'Ops & finance',
                url: '/founders/ops-and-finance',
                icon: 'IconCalculator',
                color: 'salmon',
            },
            {
                name: 'People',
                url: '/founders/people',
                icon: 'IconPeople',
                color: 'blue',
            },
            {
                name: 'Product',
                url: '/founders/product',
                icon: 'IconPhone',
                color: 'yellow',
            },
            {
                name: 'Product-market fit',
                url: '/founders/product-market-fit',
                icon: 'IconConfetti',
                color: 'seagreen',
            },
            {
                name: 'Revenue',
                url: '/founders/revenue',
                icon: 'IconCreditCard',
                color: 'purple',
            },
            {
                name: 'Sales & CS',
                url: '/founders/sales-and-cs',
                icon: 'IconHeadset',
                color: 'salmon',
            },
        ],
    },
    {
        name: 'Product engineers',
        url: '/product-engineers',
        icon: 'IconHelmet',
        color: 'orange',
        children: [
            {
                name: 'Experiments',
                url: '/product-engineers/experiments',
                icon: 'IconFlask',
                color: 'green',
                tag: 'Experiments',
            },
            {
                name: 'Feature management',
                url: '/product-engineers/feature-management',
                icon: 'IconGanttChart',
                color: 'purple',
            },
            {
                name: 'Growth engineering',
                url: '/product-engineers/growth',
                icon: 'IconTrending',
                color: 'seagreen',
            },
            {
                name: 'Product analytics',
                url: '/product-engineers/product-analytics',
                icon: 'IconGraph',
                color: 'blue',
            },
            {
                name: 'User research',
                url: '/product-engineers/user-research',
                icon: 'IconThoughtBubble',
                color: 'salmon',
            },
            {
                name: 'Engineering',
                url: '/product-engineers/engineering',
                icon: 'IconHelmet',
                color: 'yellow',
            },
        ],
    },
    {
        name: 'Blog',
        url: '/blog',
        icon: 'IconNewspaper',
        color: 'teal',
        children: [
            {
                name: 'CEO diaries',
                url: '/blog/ceo-diaries',
                icon: 'IconCrown',
                color: 'blue',
            },
            {
                name: 'PostHog news',
                url: '/blog/posthog-news',
                icon: 'IconNewspaper',
                color: 'yellow',
            },
            {
                name: 'Inside PostHog',
                url: '/blog/inside-posthog',
                icon: 'IconLogomark',
                color: 'seagreen',
            },
            {
                name: 'Using PostHog',
                url: '/blog/using-posthog',
                icon: 'IconGraduationCap',
                color: 'salmon',
            },
            {
                name: 'General',
                url: '/blog/general',
                icon: 'IconNewspaper',
                color: 'green',
            },
            {
                name: 'Comparisons',
                url: '/blog/comparisons',
                icon: 'IconColumns',
                color: 'lilac',
            },
        ],
    },
    {
        name: 'Changelog',
        url: '/changelog',
        icon: 'IconCalendar',
        color: 'salmon',
    },
    {
        name: 'Customer stories',
        url: '/customers',
        icon: 'IconPerson',
        color: 'yellow',
    },
    {
        name: 'Guides & tutorials',
        url: '/tutorials',
        icon: 'IconMap',
        color: 'red',
        children: [
            {
                name: 'Product OS',
                url: '/tutorials/product-os',
                icon: 'IconStack',
                color: 'salmon',
                tag: 'Product os',
            },
            {
                name: 'Product analytics',
                url: '/tutorials/product-analytics',
                icon: 'IconGraph',
                color: 'blue',
            },
            {
                name: 'Session replay',
                url: '/tutorials/session-replay',
                color: 'yellow',
                icon: 'IconRewindPlay',
            },
            {
                name: 'Feature flags',
                url: '/tutorials/feature-flags',
                icon: 'IconToggle',
                color: 'seagreen',
            },
            {
                name: 'Experiments',
                url: '/tutorials/experimentation',
                icon: 'IconFlask',
                color: 'purple',
                tag: 'Experimentation',
            },
            {
                name: 'Surveys',
                url: '/tutorials/surveys',
                icon: 'IconMessage',
                color: 'blue',
            },
            {
                name: 'CDP',
                url: '/tutorials/cdp',
                color: 'yellow',
                icon: 'IconPerson',
                tag: 'Cdp',
            },
            {
                name: 'LLM observability',
                url: '/tutorials/ai-engineering',
                color: 'purple',
                icon: 'IconAI',
                tag: 'LLM observability',
            },
        ],
    },
    {
        name: 'Spotlight',
        url: '/spotlight',
        icon: 'IconSpotlight',
        color: 'blue',
    },
    {
        name: 'Newsletter',
        icon: 'IconNewspaper',
        color: 'green',
        url: '/newsletter',
    },
]
