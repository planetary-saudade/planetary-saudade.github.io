
const currentUrl = window.location.href;
const siteUrl = "https://planetary-saudade.github.io";
let updatedUrl = currentUrl.replace("https://planetary-saudade.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-outputs",
          title: "Outputs",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Updated September 2026. Click the PDF icon for the full version.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-community",
          title: "Community",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/community/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-graduated-from-the-university-of-tokyo-with-a-b-sc-in-earth-and-planetary-physics-summa-cum-laude-farewell-chibutsu-article-link",
          title: 'Graduated from the University of Tokyo with a B.Sc. in Earth and Planetary...',
          description: "",
          section: "News",},{id: "news-started-my-ph-d-at-the-university-of-toronto-farewell-naoj-ahoy-u-of-t",
          title: 'Started my Ph.D. at the University of Toronto. Farewell, NAOJ — ahoy, U...',
          description: "",
          section: "News",},{id: "news-submitted-steepening-optical-slopes-in-exoplanet-transmission-spectra-with-charged-hazes-arxiv",
          title: 'Submitted “Steepening Optical Slopes in Exoplanet Transmission Spectra with Charged Hazes.” [arXiv]',
          description: "",
          section: "News",},{id: "projects-constraining-tidal-efficiencies",
          title: 'Constraining Tidal Efficiencies',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/asynchronous/";
            },},{id: "projects-atmosphere-interior-co-evolution-of-rocky-planets",
          title: 'Atmosphere-Interior (Co)evolution of Rocky Planets',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/coevolution/";
            },},{id: "projects-haze-charging-in-exoplanetary-atmospheres",
          title: 'Haze Charging in Exoplanetary Atmospheres',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/haze-charging/";
            },},{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%73%61.%69%6E%61%69@%6D%61%69%6C.%75%74%6F%72%6F%6E%74%6F.%63%61", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/masayuki-inai-306241324", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0000-0961-4998", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
