const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque pariatur assumenda dolores praesentium, voluptatibus, alias minima optio impedit blanditiis deleniti perspiciatis, quasi magnam neque fuga.",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sequi omnis corrupti amet sunt? Sunt nihil repellat ullam at dignissimos sed totam ducimus eius doloremque impedit maiores, id, ratione reiciendis?",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolores deserunt atque! Itaque, quas perspiciatis. Quia nemo possimus fugit eligendi repellat? Tempora blanditiis obcaecati suscipit neque vitae nam maiores non voluptatem.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vitae, aut accusantium vel nihil eaque architecto optio maiores fugit animi, facere sit veniam, aliquid repellat quia molestias quibusdam nesciunt!",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson(0);
});

document.querySelectorAll("button").forEach((button) =>
  button.addEventListener("click", function () {
    switch (this.className) {
      case "prev-btn":
        currentItem -= 1;
        if (currentItem < 0) {
          currentItem = reviews.length - 1;
        }
        break;
      case "next-btn":
        currentItem += 1;
        if (currentItem > reviews.length - 1) {
          currentItem = 0;
        }
        break;
      case "random-btn":
        currentItem = Math.floor(Math.random() * reviews.length);
        break;
    }
    showPerson(currentItem);
  })
);

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
