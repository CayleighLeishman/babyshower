// nav.js
document.addEventListener('DOMContentLoaded', function () {
  const elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems);


// closes the sidenav when a link is clicked
const sidenavLinks = document.querySelectorAll('.sidenav a');
  sidenavLinks.forEach(link => {
    link.addEventListener('click', function () {
      const sidenavInstance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
      sidenavInstance.close();
    });
  });
});