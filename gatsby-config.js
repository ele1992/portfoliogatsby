module.exports = {
  siteMetadata: {
    title: "YipAuYeung",
  },
  plugins: [
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: `secret_TpxWC9S2Vojs5L7ASSlE98IZburD8hs5OIVCV9unbFQ`,
        databaseId: `75f82346-6e3f-42a3-a2b1-163f59098164`,
      },
    },
    "gatsby-plugin-postcss",
  ],
};
