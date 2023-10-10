var rhit = rhit || {};

rhit.main = function () {
	console.log("Ready");

    document.querySelector("#top").addEventListener("click", (event) => {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
          });
    });
};

rhit.main();
