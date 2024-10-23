class CvController {
  static detail(req, res) {
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
    console.log(req.params);
    res.render("cv", { title: "Home Page", workExperience });
  }
}

export default CvController;
