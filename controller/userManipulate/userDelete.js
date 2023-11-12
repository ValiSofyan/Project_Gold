const db = require("../../db/db");
const currentDate = new Date();

class DeleteUser {
    static async deleteUser(req, res) {
        const { username, password, email } = req.body;

        if (!username || !password || !email) {
            return res.status(400).render("profileuser", { error: "Missing required fields" });
        }

        try {
            const existingUser = await db("UserData")
                .where("username", username)
                .andWhere("password", password)
                .andWhere("email", email)
                .first();

            if (!existingUser) {
                return res.status(404).render("profileuser", { error: "User not found" });
            }

            await db("application")
                .where("user_id", existingUser.id)
                .delete();

            await db("UserData")
                .where("username", username)
                .andWhere("password", password)
                .andWhere("email", email)
                .delete();

            const dataContents = await db("SkillData").select("id", "skill");

            return res.status(200).render("profileuser", { message: "User deleted successfully", dataContents });
        } catch (error) {
            console.error("Error in deleteUser:", error);
            return res.status(500).render("profileuser", { error: "Internal server error" });
        }
    }
}

module.exports = DeleteUser;
