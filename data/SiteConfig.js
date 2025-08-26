const config = {
  // Site info
  siteTitle: 'Tulisan Programmer Gadungan', // Site title.
  siteTitleShort: 'TOPIDESTA', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Topidesta - https://topidesta.my.id/', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024x1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://topidesta.my.id', // Domain of your website without pathPrefix.
  pathPrefix: '', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'Tulisan Programmer Gadungan', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteLang: 'id-ID',
  siteFBAppID: '', // FB Application ID for using app insights
  googleAnalyticsID: '146436102', // GA tracking ID.
  postDefaultCategoryID: '', // Default category for posts.
  // Common for tag, category pages and widget
  numberLatestPost: 10,
  postsPerPage: 8,
  // Use for post
  dateFromFormat: 'YYYY-MM-DDTHH:mm:ssZ', // Date format used in the frontmatter.
  dateFormat: 'DD/MMMM/YYYY', // Date format for display.
  postTagged: '',
  postInCategories: '',
  postOnDate: 'Tampil',
  // Use for comment
  lazyLoadComments: true,
  disqusShortname: 'topidesta-dev', // Disqus shortname.
  komentar: 'topidesta/topidesta', // Disqus shortname.
  btnLoadComments: 'Lihat Komentar',
  // Use for home page
  numberLoadmore: 6,
  btnLoadmore: 'Halaman selanjutnya ..',
  homeHasLoadmore: true,
  homeHasThumbnail: true,
  homeHeader: '',
  homeMoreArticles: "Artikel lainnya",
  // Use for page
  pathPrefixPagination: "/page", // Prefix path for pagination
  pageNotFoundTitle: 'Halaman Tidak Ditemukan', //
  pageNotFoundBtn: "Back to our site",
  pageNotFoundContent:
    "Wow, Halaman benar benar tidak ada woy!.",
  // Use for tag
  pathPrefixTag: "/tag", // Prefix path for tags
  tagHeader: "Posting Tag", // use in header of tag-template page
  tagHasThumbnail: true,
  // Use for category
  pathPrefixCategory: "/category", // Prefix path for category
  categoryHeader: "Kategori Posting", // use in header of category-template page
  categoryHasThumbnail: true,
  // Use for blog
  pathPrefixBlog: "/blog", // Prefix path for blog
  blogHeader: "Blog", // use in header of category-template page
  blogHasThumbnail: true,
  // Use for widget
  categoryWidgetTitle: "Kategori",
  tagWidgetTitle: "Tags",
  latestPostsWidgetTitle: "Posting Terbaru",
  linksWidgetTitle: "Links",
  // Use for Google custom search
  searchWidgetTitle: "Google Search",
  searchWidgetPlaceHolder: "Enter keyword",
  searchEngineID: "001989067992894107395:bqxk4ijd5_s",
  hasSearch: true,
  // Use for links widget
  sidebarSticky: true,
  sidebarLinks: [
    {
      label: 'RS Persahabatan',
      url: 'https://rspersahabatan.co.id',
    },
    {
      label: 'Klinik Halo Bayi',
      url: 'https://halobayi.co.id',
    },
    {
      label: 'RS Sari Asih',
      url: 'https://sariasih.id',
    },
    {
      label: 'Tania Rascia',
      url: 'https://www.taniarascia.com',
    },
    {
      label: 'GatsbyJS Template',
      url: 'https://github.com/completejavascript/gatsby-blog-template',
    },
    {
      label: 'M Desta Fadilah',
      url: 'https://mdestafadilah.blogspot.com',
    },
  ],
  // Use for user info
  userName: "mdestafadilah", // Username to display in the author segment.
  userEmail: "desta@rspersahabatan.co.id", // Email used for RSS feed"s author segment
  userTwitter: "emang_dasar", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Jakarta, Indonesia", // User location to display in the author segment.
  userAvatar:
    "https://www.gravatar.com/avatar/42fd3d526fde1ef76d5002e4ebd303e9.jpg?s=300", // User avatar to display in the author segment.
  userDescription:
    "Tulisan Programmer Gadungan.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'Email',
      url: 'mailto:desta.08b@gmail.com',
      iconClassName: 'far envelope',
    },
    {
      label: 'Website',
      url: 'https://topidesta.netlify.app',
      iconClassName: 'fas globe',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/emang_dasar',
      iconClassName: 'fab twitter',
    },
    {
      label: 'Facebook',
      url: 'https://www.facebook.com/mfadilah/',
      iconClassName: 'fab facebook-f',
    },
    {
      label: 'Linkedin',
      url: 'https://www.linkedin.com/in/mdestafadilah',
      iconClassName: 'fab linkedin-in',
    },
  ],
  // Use for navigation
  navTitle: 'Topidesta',
  navLinks: [
    { label: 'Tentang', url: '/about' },
    { label: 'Projek', url: '/projek' },
    { label: 'Konsep ATM', url: '/konsep-belajar-atm-amati-tiru-modifikasi' },
    { label: 'Sertifikat', url: '/sertifikat' },
    { lable: 'CV', url: 'https://www.self.so/muchamad-desta-fadilah'}
  ],
  // Use for footer
  socialLinks: [
    {
      label: 'Codepen',
      url: 'https://codepen.io/mdestafadilah/',
      iconClassName: 'fab codepen',
    },
    {
      label: 'FreeCodeCamp',
      url: '@fcc3452306c-380a-45f9-995c-d887348c8e38', // Ignore
      iconClassName: 'fab free-code-camp',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/mdestafadilah',
      iconClassName: 'fab github',
    },
    {
      label: 'Facebook',
      url: 'https://www.facebook.com/mfadilah/',
      iconClassName: 'fab facebook-f',
    },
    {
      label: 'Linkedin',
      url: 'https://www.linkedin.com/in/mdestafadilah/',
      iconClassName: 'fab linkedin-in',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/emang_dasar',
      iconClassName: 'fab twitter',
    },
    {
      label: 'RSS',
      url: 'https://topidesta.my.id/rss.xml',
      iconClassName: 'fas rss',
    },
  ],
  footerLinks: [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Alat Tempur', url: '/alat' },
    { label: 'Belajar', url: '/belajar' },
    { label: 'Sitemap', url: 'https://topidesta.netlify.app/sitemap.xml' },
    { label: 'Lagu', url: '/lagu' },
  ],
  copyright: 'Copyright © 2019 - 2025 Topidesta. MIT license.',
  // Use for manifest
  themeColor: "#2196F3", // Used for setting manifest and progress theme colors.
  backgroundColor: "#FFF", // Used for setting manifest background color.
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
