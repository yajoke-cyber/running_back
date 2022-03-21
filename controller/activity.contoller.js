const { getActivitiesById, addActivityAsync } = require("../service/activity");
class ActivityController {
  async getActivities(req, res) {
    const { user_id } = req.params;
    const result = await getActivitiesById(user_id);
    res.end(JSON.stringify(result));
  }
  async addActivity(req, res) {
    const { userId, time, distance } = req.body;
    await addActivityAsync(userId, time, distance);
    res.end("添加成功");
  }
}
module.exports = new ActivityController();
