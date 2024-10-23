import express from "express";
const rootRouter = express.Router();

let workExperience = [
  {
    name: "Front End Developer",
    start_date: "Jan 2015",
    end_date: "Jan 2015",
    description:
      "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.",
  },
  {
    name: "Back end Developer",
    start_date: "Jan 2015",
    end_date: "Jan 2015",
    description:
      "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.",
  },
];

rootRouter.get("/about", (req, res) => {
  res.send(`<h1> Hello About Page!!</h1>`);
});

rootRouter.get("/", (req, res) => {
  res.render("index", { title: "Home Page", workExperience });
});

export default rootRouter;
