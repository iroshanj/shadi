import rooturl from "../../config.js";

export const allUsers = async () => {
  const response = await fetch(`${rooturl}/biodatagetallusers.php`);
  return response.json();
};

export const update = async (dataObj) => {
  const response = await fetch(`${rooturl}/update.php`, {
    method: "POST",
    body: JSON.stringify(dataObj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const addImage = async (formData) => {
  const response = await fetch(`https://shagunpal.online/upload.php`, {
    method: "POST",
    body: formData,
     
  });
   return response.json();
};
