import rooturl from "../../config.js";

export const register = async (dataObj) => {
  const response = await fetch(`${rooturl}/newbiodata.php`, {
    method: "POST",
    body: JSON.stringify(dataObj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
