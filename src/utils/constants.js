export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR = "https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png";
export const BACKGROUND_IMG = 'https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg';
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
  }
};
export const IMG_CDN_MOVIE_LIST = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  { languages: "en", name: "English" },
  { languages: "hindi", name: "Hindi" },
  { languages: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = "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";