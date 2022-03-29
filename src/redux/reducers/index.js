import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
// ARTICLE CREATION
import tags from "./create_article/tags";
import categories from "./create_article/categories";
import articleId from "./create_article/articleId";
import authorList from "./create_article/authorNameList";
import author from "./create_article/authorNameList";
import userId from "./uR";
import uR from "./uR";
import pmat from "./pm/pm.article.reducer";

export default combineReducers({
  alert,
  auth,
  profile,
  // FOR ARTICLES
  tags,
  categories,
  articleId,
  authorList,
  author,
  // FOR UR
  userId,
  uR,
  pmat,
});
