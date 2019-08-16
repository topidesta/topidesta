const config = {
  // Site info
  siteTitle: "Topidesta Blog", // Site title.
  siteTitleShort: "topidesta", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Topidesta Blog", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024x1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://topidesta-dev.me/", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Rumah baru topidesta.wordpress.com blog.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteLang: "id",
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "", // GA tracking ID.
  postDefaultCategoryID: "", // Default category for posts.
  // Common for tag, category pages and widget
  numberLatestPost: 8,
  postsPerPage: 6,
  // Use for post
  dateFromFormat: "YYYY-MM-DDTHH:mm:ssZ", // Date format used in the frontmatter.
  dateFormat: "Do-MMMM-YYYY", // Date format for display.
  postTagged: "",
  postInCategories: "",
  postOnDate: "Posted on",
  // Use for comment
  lazyLoadComments: true,
  disqusShortname: "", // Disqus shortname.
  btnLoadComments: "Load comments",
  // Use for home page
  numberLoadmore: 6,
  btnLoadmore: "Load more",
  homeHasLoadmore: true,
  homeHasThumbnail: true,
  homeHeader: "Home",
  // Use for page
  pathPrefixPagination: "/page", // Prefix path for pagination
  pageNotFoundTitle: "Halaman Tidak Ditemukan", // 
  pageNotFoundBtn: "Kembali",
  pageNotFoundContent: "Wow, Halaman benar benar tidak ada woy!.",
  // Use for tag
  pathPrefixTag: "/tag", // Prefix path for tags
  tagHeader: "Posts tagged as", // use in header of tag-template page
  tagHasThumbnail: true,
  // Use for category
  pathPrefixCategory: "/category", // Prefix path for category
  categoryHeader: "Posts in category", // use in header of category-template page
  categoryHasThumbnail: true,
  // Use for widget
  categoryWidgetTitle: "Categories",
  tagWidgetTitle: "Tags",
  latestPostsWidgetTitle: "Latest posts",
  linksWidgetTitle: "Links",
  // Use for Google custom search
  searchWidgetTitle: "Looking for?",
  searchWidgetPlaceHolder: "Enter keyword",
  searchEngineID: "008548374781244864787:9ybvtnkbt7o",
  hasSearch: true,
  // Use for links widget
  sidebarSticky: true,
  sidebarLinks: [
    {
      label: "Gatsby Template",
      url: "https://github.com/completejavascript/gatsby-blog-template"
    },
    {
      label: "RSUP PERSAHABATAN",
      url: "https://rsuppersahabatan.co.id/"
    },
  ],
  // Use for user info
  userName: "Topidesta", // Username to display in the author segment.
  userEmail: "desta.08b@gmail.com", // Email used for RSS feed"s author segment
  userTwitter: "emang_dasar", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Jakarta, Indonesia", // User location to display in the author segment.
  userAvatar: "", // User avatar to display in the author segment.
  userDescription:
    "Software Engineer, Web Developer, JavaScript Lover & Blogger @completejavascript.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Email",
      url: "mailto:desta.08b@gmail.com",
      iconClassName: "far envelope"
    },
    {
      label: "Website",
      url: "https://topidesta-dev.me/",
      iconClassName: "fas globe"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/emang_dasar",
      iconClassName: "fab twitter"
    },
    { 
      label: "Facebook", 
      url: "https://www.facebook.com/mfadilah/", 
      iconClassName: "fab facebook-f" 
    },
    { 
      label: "Linkedin", 
      url: "https://www.linkedin.com/in/much-d-fadilah/", 
      iconClassName: "fab linkedin-in"
    },
  ],
  // Use for navigation
  navTitle: "GB Template",
  navLinks: [
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
  ],
  // Use for footer
  socialLinks: [
    { 
      label: "Codepen", 
      url: "https://codepen.io/mdestafadilah/", 
      iconClassName: "fab codepen" 
    },
    { 
      label: "FreeCodeCamp", 
      url: "", // Ignore 
      iconClassName: "fab free-code-camp"
    },
    { 
      label: "GitHub",
      url: "https://github.com/mdestafadilah",
      iconClassName: "fab github"
    },
    { 
      label: "Facebook", 
      url: "https://www.facebook.com/mfadilah/", 
      iconClassName: "fab facebook-f"
    },
    { 
      label: "Linkedin", 
      url: "https://www.linkedin.com/in/much-d-fadilah/", 
      iconClassName: "fab linkedin-in"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/emang_dasar",
      iconClassName: "fab twitter"
    },
    {
      label: "RSS",
      url: "https://topidesta-dev.me/rss.xml",
      iconClassName: "fas rss"
    },
  ],
  footerLinks: [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
    { label: "Terms of Use", url: "/terms" },
    { label: "Privacy Policy", url: "/privacy" },
    { label: "Sitemap", url: "https://topidesta-dev.me/sitemap.xml" },
  ],
  copyright: "Copyright © 2019 Lam Pham. Unless otherwise noted, all code MIT license.",
  // Use for manifest
  themeColor: "#2196F3", // Used for setting manifest and progress theme colors.
  backgroundColor: "#FFF" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/" || config.pathPrefix === "") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
