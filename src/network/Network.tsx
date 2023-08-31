import { IPosterData } from "../types/DataTypes";

async function postPosterData(url: string, data: IPosterData) {
  return await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
    .then(response => {
      if(!response.ok)
          alert(response.statusText);
        
      return response.json();
      })
  }

export default postPosterData