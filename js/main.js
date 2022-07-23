// generate our project
const properties = [
  "DORRA CONTRACTING",
  "DORRA DEVELOPMENTS",
  "DORRA TORISM",
  "DORRA INTERIORS",
];
for (let i = 1; i < 7; i++) {
  document.getElementById(
    "projects"
  ).innerHTML += `<div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade-down"><div class="card p-0">
    <div class="img-container">
        <img src="img/whilte-building (${i}).jpg" class="card-img-top w-100" alt="${
    properties[Math.floor(Math.random() * (3 - 0 + 1)) + 0]
  }">
    </div>
    <div class="card-body d-flex justify-content-between">
      <h5 class="card-title h6 text-start">${
        properties[Math.floor(Math.random() * (3 - 0 + 1)) + 0]
      }<br /><span class="properties-number text-secondary">${
    Math.floor(Math.random() * (20 - 10 + 1)) + 10
  } properties</span></h5>
      <a href="#" class="btn bg-primary" style="height: 38px;"><i class="fa-solid fa-play text-light"></i></a>
    </div>
  </div></div>`;
}
// generate our team
const employee = [
  "samir fimmel",
  "walid idmoulay",
  "rachid bouaabdli",
  "jamal amanay",
];
const role = ["founder", "Co-founder", "CEO", "CTO"];
for (emp of employee) {
  document.getElementById(
    "team"
  ).innerHTML += `<div class="col-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-down"><div class="card p-0">
  <div class="img-container">
      <img src="img/employee (2).jpg" class="card-img-top w-100" alt="...">
  </div>
  <div class="card-body text-center">
  <h5 class="card-title h6">${emp}<br /><span class="properties-number text-secondary">${
    role[Math.floor(Math.random() * (3 - 0 + 1)) + 0]
  }</span></h5>
  <i class="fa-brands fa-facebook-square fa-2xl text-secondary"></i>
  <i class="fa-brands fa-twitter-square fa-2xl text-secondary"></i>
  <i class="fa-brands fa-linkedin fa-2xl text-secondary"></i>
  </div>
</div></div>`;
}
// generate blogs
for (let i = 0; i < 3; i++) {
  document.getElementById("blogs").innerHTML += `
  <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade-down">
  <div class="card">
          <div class="img-container">
            <img src="img/blog (${i + 1}).jpg" alt="" class="card-img-top">
          </div>
          <div class="card-body">
            <h5 class="card-title">how to rent a home very easily?</h5>
            <small class="text-primary"><i class="fa-solid fa-bookmark"></i> <span>Rentals</span></small>
            <p class="text-secondary my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aliquid veritatis itaque quae facilis perspiciatis esse culpa velit odio nemo!</p>
            <small class="text-secondary"><i class="fa-solid fa-calendar"></i> <time datetime="2020-06-19">June 19, 2020</time></small>
          </div>
        </div>
      </div>
  `;
}
// initialize aos library
AOS.init();
