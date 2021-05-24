export default function getData() {
  let result = {};
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:8000/data");
  xhr.send();
  xhr.responseType = "json";
  xhr.addEventListener("readystatechange", () => {
    try {
      if (xhr.readyState === xhr.DONE) {
        result = xhr.response;
      }
    } catch (e) {
      console.error(e);
    }
  });
  return result;
}
