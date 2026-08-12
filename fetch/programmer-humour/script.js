const imgEl = document.getElementsByTagName("img")[0];
const endpointAPI = "https://xkcd.now.sh/?comic=latest";

const fetchData = async () => {
  const response = await fetch(endpointAPI);
  return await response.json();
};

let data;
fetchData().then((object) => {
  console.log(object);
  imgEl.src = object.img || "";
});
