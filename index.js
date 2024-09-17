const NAMES = [
    "Sora",
    "Hughie",
    "Simon",
    "Kairi",
    "Annie",
    "Talia",
  ];
  
  const OCCUPATIONS = [
    "programmer",
    "game_dev",
    "driver",
    "athlete",
    "pilot",
    "actor",
  ];

  const MAX_FREELANCERS = 23;

  const freelancers = [
    { name: "Alice",price: 30, occupation: "writer" },
    { name: "Bob", price: 50, occupation: "teacher" },
    { name: "Carol", price: 70, occupation: "programmer" },
  ];

  let averagePrice = 0;
  
  function addFreelancer() {
    const name = NAMES[Math.floor(Math.random() * NAMES.length)];
    const occupation =
      OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
    const price = 1 + Math.floor(Math.random() * 1000);
    freelancers.push({ name, occupation, price });
  }

  function updateAveragePrice(state) {
    const total = freelancers.reduce(
      (acc, freelancer) => acc + freelancer.price,
      0
    );
    averagePrice = total / freelancers.length;
  }
  
  function renderFreelancers() {
    const $freelancers = freelancers.map((freelancer) => {
      const $tr = document.createElement("tr");
  
      $tr.innerHTML = `
      <td>${freelancer.name}</td>
      <td>${freelancer.occupation}</td>
      <td>$${freelancer.price}</td>
      `;
      return $tr;
    });

    const $tbody = document.querySelector(".freelancers tbody");
    $tbody.replaceChildren(...$freelancers);
  }

  function renderAveragePrice() {
    const $price = document.querySelector(".average_price");
    $price.textContent = `$${averagePrice.toFixed(2)}`;
  }

  function render() {
    renderFreelancers();
    renderAveragePrice();
  }

  updateAveragePrice();
  render();

  const freelancerInterval = setInterval(function () {
    addFreelancer();
    updateAveragePrice();
    render();
    if (freelancers.length >= MAX_FREELANCERS) {
        clearInterval(freelancerInterval);
      }
    }, 1000);