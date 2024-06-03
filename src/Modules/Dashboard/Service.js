import rooturl from "../../config.js";

export const allBiodata = async () => {
  const response = await fetch(`${rooturl}/biodatagetallusers.php`);
  return response.json();
};
