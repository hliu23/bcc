module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Brebeuf Coding Club",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `articles`,
        path: `${__dirname}/articles`,
      }
    },
    "gatsby-plugin-mdx",
  ],
};
