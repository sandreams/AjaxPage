(function () {
  const ajax = (method, url) => {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open(method, url);
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          if (request.status.toString().startsWith("2")) {
            resolve(request.response);
          } else {
            reject();
          }
        }
      };
      request.send();
    });
  };
  getHTML.onclick = (event) => {
    event.preventDefault();
    ajax("GET", "/1.html").then(
      (data) => {
        console.log("success", data);
        const new_div = document.createElement("div");
        new_div.innerHTML = data;
        document.body.appendChild(new_div);
      },
      (errMsg) => {
        console.log("error", errMsg);
      }
    );
  };
  getJSON.onclick = (event) => {
    event.preventDefault();
    ajax("GET", "/2.json").then(
      (data) => {
        console.log("success", data);
        const jsonData = JSON.parse(data);
        console.log("jsonData :>> ", jsonData);
        // const new_div = document.createElement("div");
        // new_div.innerHTML = data;
        // document.body.appendChild(new_div);
      },
      (errMsg) => {
        console.log("error", errMsg);
      }
    );
  };
  getCSS.onclick = (event) => {
    event.preventDefault();
    ajax("GET", "/style.css").then(
      (data) => {
        console.log("success", data);
        const new_style = document.createElement("style");
        new_style.innerHTML = data;
        document.head.appendChild(new_style);
      },
      (errMsg) => {
        console.log("error", errMsg);
      }
    );
  };
  getJS.onclick = (event) => {
    event.preventDefault();
    ajax("GET", "/4.js").then(
      (data) => {
        console.log("success", data);
        const new_script = document.createElement("script");
        new_script.innerHTML = data;
        document.body.appendChild(new_script);
      },
      (errMsg) => {
        console.log("error", errMsg);
      }
    );
  };
  getXML.onclick = (event) => {
    event.preventDefault();
    ajax("GET", "/5.xml").then(
      (data) => {
        console.log("success", data);
        const parser = new DOMParser();
        const dom = parser.parseFromString(data, "application/xml");
        console.log("dom :>> ", dom);
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log("text :>> ", text.trim());
        $(`<span>${text.trim()}</span>`).appendTo(".xml-content");
      },
      (errMsg) => {
        console.log("error", errMsg);
      }
    );
  };
})();
