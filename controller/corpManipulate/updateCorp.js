const db = require("../../db/db");
const loginModel_2 = require("./loginCorp");

class updateCorp {
    static async corpUpdate (req, res) {
        const currentDate = new Date()
        const isLoginSuccessful = await loginModel_2.loginCorp1(res);
        console.log(isLoginSuccessful);

        if (isLoginSuccessful){

            const { id, username, password,website } = req.body;

            if (!id || (!username && !password )) {
                return res.status(400).json("Missing required fields" );
            }

            try {
                const existingUser = await db("UserCorpData")
                    .where("id", id)
                    .first();

                if (!existingUser) {
                    return res.status(404).json("User not found" );
                }
                await db("UserCorpData")
                    .where("id", id)
                    .update({
                        username,
                        password,
                        website,
                        updated_at:currentDate
                        // email,
                        // first_name,
                        // last_name,
                        // phone_number,
                    });

                res.status(200).json("User updated successfully" );
            } catch (error) {
                console.error("Error in updateCorp:", error);
                res.status(500).json( "Internal server error" );
            }
        }
        
    }
}

module.exports = updateCorp