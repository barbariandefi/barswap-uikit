import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.barswap.io/contact-us",
      },
      {
        label: "Blog",
        href: "https://barswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.barswap.io/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.barswap.io/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://barswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.barswap.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.barswap.io/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.barswap.io/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/barswap",
      },
      {
        label: "Documentation",
        href: "https://docs.barswap.io",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@barswap-1/s/barswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.barswap.io/help/faq#is-barswap-safe-has-barswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.barswap.io/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/BarSwapDEFI",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/barswap",
      },
      // {
      //   label: "Bahasa Indonesia",
      //   href: "https://t.me/PancakeSwapIndonesia",
      // },
      // {
      //   label: "中文",
      //   href: "https://t.me/PancakeSwap_CN",
      // },
      // {
      //   label: "Tiếng Việt",
      //   href: "https://t.me/PancakeSwapVN",
      // },
      // {
      //   label: "Italiano",
      //   href: "https://t.me/pancakeswap_ita",
      // },
      // {
      //   label: "русский",
      //   href: "https://t.me/pancakeswap_ru",
      // },
      // {
      //   label: "Türkiye",
      //   href: "https://t.me/pancakeswapturkiye",
      // },
      // {
      //   label: "Português",
      //   href: "https://t.me/PancakeSwapPortuguese",
      // },
      {
        label: "Español",
        href: "https://t.me/barswap_es",
      },
      // {
      //   label: "日本語",
      //   href: "https://t.me/pancakeswapjp",
      // },
      // {
      //   label: "Français",
      //   href: "https://t.me/pancakeswapfr",
      // },
      {
        label: "Announcements",
        href: "https://t.me/barswap_channel",
      },
      // {
      //   label: "Whale Alert",
      //   href: "https://t.me/PancakeSwapWhales",
      // },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://www.reddit.com/r/barswap/",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://www.instagram.com/barswap/",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/barswap/",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
