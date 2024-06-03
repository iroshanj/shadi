import rooturl from "../../config.js";

export const login = async (dataObj) => {
   const response = await fetch(`${rooturl}/login.php`, {
    method: "POST",
    body: JSON.stringify(dataObj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
