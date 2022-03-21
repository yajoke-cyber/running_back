const connections = require("../app/database");
class Activity {
  async getActivitiesById(id) {
    const statement = `SELECT * FROM record WHERE user_id = ?;`;
    const [result] = await connections.execute(statement, [id]);
    return result;
  }
  async addActivityAsync(id, lastTime, distance) {
    const statement = `INSERT INTO record (user_id,last_time,distance) VALUES(?,?,?);`;
    const [result] = await connections.execute(statement, [
      id,
      lastTime,
      distance,
    ]);
    return result;
  }
}
module.exports = new Activity();
