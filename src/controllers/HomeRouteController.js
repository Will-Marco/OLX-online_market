module.exports = class HomeRouteController {
  static async HomeGetController(req, res) {
    const users = await users.findOne();
    res.render("index");
  }
};
