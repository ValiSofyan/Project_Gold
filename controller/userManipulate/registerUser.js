const db = require("../../db/db");

class RegistrationModel {
    static async registerUser(req, res) {
        const currentDate = new Date();
        const { username, password, email, first_name, last_name, phone_number } = req.body;

        if (!username || !password || !email) {
            return null;
        }

        try {
            const existingUser = await db("UserData")
                .where("username", username)
                .orWhere("email", email)
                .first();

            if (existingUser) {
                return null;
            } else {
                const newUserId = await db("UserData")
                    .insert({
                        username,
                        password,
                        email,
                        first_name,
                        last_name,
                        phone_number,
                        registered_at: currentDate
                    });

                return { username };
            }
        } catch (error) {
            console.error("Error in registerUser:", error);
            return null;
        }
    }
}

module.exports = RegistrationModel;
