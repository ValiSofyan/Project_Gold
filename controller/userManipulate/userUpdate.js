const db = require("../../db/db");
const currentDate = new Date();


class UpdateUser {
    static async updateUser(req, res) {
      const { username, password, email, first_name,selectedSkillId, last_name, phone_number, registered_at } = req.body;
        console.log(selectedSkillId);
      if (!username || !password || !email) {
        return res.status(400).render("profileuser", { error: "Missing required fields" });
      }
  
      try {
  
        const existingUser = await db("UserData").where("username", username).first();
  
        if (!existingUser) {
          return res.status(404).render("profileuser", { error: "User not found" });
        }
  
        const dataContents = await db("SkillData").select("id", "skill");
  
        await db("UserData")
          .where("username", username)
          .update({
            username,
            password,
            email,
            first_name,
            last_name,
            phone_number,
            skilldata_id: selectedSkillId,
            registered_at,
            updated_at: currentDate,
          });
  
        return dataContents;
      } catch (error) {
        console.error("Error in updateUser:", error);
        res.status(500).render("profileuser", { error: "Internal server error" });
      }
    }
  }
  
  module.exports = UpdateUser;
  
  
  
  

