import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Pomodoro Timer`,
    siteUrl: `https://pomodoro.fabianjost.com`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pomodoro Timer`,
        short_name: `Pomodoro`,
        description: `Increase productivity with this simple promodoro timer`,
        start_url: `/`,
        background_color: `#1f2937`,
        theme_color: `#1f2937`,
        display: `standalone`,
        icon: `./assets/icon.svg`,
        icon_options: {
          purpose: `any maskable`,
        },
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`],
        workboxConfig: {
          globPatterns: ['**/*.{jpg,png,webp,svg,mp3}'],
       }
      },
    },
  ]
};

export default config;
