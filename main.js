let currentUser;
let renderer;

$("#loadUser").on("click", function () {
  currentUser = new APIManager();
  currentUser.generateUser();
});

$("#displayUser").on("click", function () {
  if (currentUser) {
    renderer = new Renderer();
    renderer.render();
  } else {
    console.log("No data inside the user");
  }
});
