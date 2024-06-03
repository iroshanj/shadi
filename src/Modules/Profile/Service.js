import rooturl from "../../config.js";

export const deleteUser = async (dataObj) => {
  const response = await fetch(`${rooturl}/delete.php`, {
    method: "POST",
    body: JSON.stringify(dataObj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
 
};
