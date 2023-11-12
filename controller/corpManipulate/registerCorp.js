const db = require("../../db/db");

class registrationModel2 {
    static async registerCorp(req, res) {
        const currentDate = new Date()
        const { username, password, website } = req.body;
        console.log(username);
        if (!username || !password || !website) {
            return null;
        }

        try {
            const existingUser = await db("UserCorpData")
                .where("username", username)
                .orWhere("website", website)
                .first();

            if (existingUser) {
                return null;            
            } else {
                const newUserId = await db("UserCorpData")
                    .insert({
                        username,
                        password,
                        website,
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

module.exports = registrationModel2;
