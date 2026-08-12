const imgEl = document.getElementsByTagName("img")[0];
const endpointAPI = "https://xkcd.now.sh/?comic=latest";

const fetchData = async () => {
  try {
    const response = await fetch(endpointAPI);
    if (!response.ok) {
      throw new Error(`Network response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
    return null;
  }
};

let data;
fetchData().then((data) => {
  console.log(data);
  if (data && data.img) {
    imgEl.src = data.img;
  } else {
    console.error("Image data not received");
  }
});
