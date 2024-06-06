const API_DOMAIN = "https://api-kpi-tracker.vercel.app/";

export const get = async (path) => {
  try {
      const response = await fetch(API_DOMAIN + path);

      if (!response.ok) {
          const errorText = await response.text(); // Read response as text in case of an error
          throw new Error(`Error ${response.status}: ${errorText}`);
      }

      const result = await response.json();
      return result;
  } catch (error) {
      console.error("Fetch error:", error);
      throw error; // Rethrow the error to be handled by the calling function
  }
};

export const post = async (path,options) => {
  const response = await fetch(API_DOMAIN + path , {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options)
  })
  const result = await response.json();
  return result;
}

export const del = async(path,id) => {
  const response = await fetch(API_DOMAIN + path + "/" + id, {
    method: "DELETE"
  })
  const result = await response.json();
  return result;
}

export const patch = async(path,options) => {
  const response = await fetch(API_DOMAIN + path,{
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(options)
  })
  const result = response.json();
  return result;
}