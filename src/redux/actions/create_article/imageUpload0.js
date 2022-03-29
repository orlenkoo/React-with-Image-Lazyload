import axios from "axios";
import { setAlert } from "../alert";
import FormData from "form-data";
import { GET_ARTICLE_IMAGES, ARTICLE_IMAGES_ERROR } from "../types";

// Get current users profile
// export const getCurrentProfile = () => async (dispatch) => {
//   try {
//     const res = await axios.get("http://localhost:8000/api/me");
//     dispatch({
//       type: GET_PROFILE,
//       payload: res.data,
//     });
//   } catch (err) {
//     dispatch({
//       type: PROFILE_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };

// Upload Images for articles
export const uploadArticleImage = (formData, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log("imageupload0", formData.articleId, formData.userId, formData);
    console.log("formdata", formData.acceptedFiles);
    var data = new FormData();

    data.append("articleId", formData.articleId);
    data.append("userId", formData.userId);

    for (let i = 0; i < formData.acceptedFiles.length; i++) {
      data.append("images", formData.acceptedFiles[i]);
    }

    const res = await axios.post(
      "http://localhost:8000/api/files/upload",
      data,
      config
    );
    // .then((response) => {
    //   callback(response);
    // })
    // .catch((error) => {
    //   errorResponse(error);
    // });

    dispatch({
      type: GET_ARTICLE_IMAGES,
      payload: res.data.uploadFileInfo,
    });
    dispatch(setAlert("Images uploaded!", "success"));
  } catch (err) {
    // console.log("error.message", err.response.data.message);
    const errors = err.message;
    if (errors) {
      dispatch(setAlert(err.response.data.message, "danger"));
    }
    dispatch({
      type: ARTICLE_IMAGES_ERROR,
      payload: { msg: err.response.data.message },
    });
  }
};
