const db = require("../../db/db");
const loginModel_2 = require("./loginCorp");

class Corpdelete {
static async deleteCorp(req, res) {
    const isLoginSuccessful = await loginModel_2.loginCorp1(res);
    console.log(isLoginSuccessful);

        if (isLoginSuccessful){
            const { id } = req.body;
            console.log(id);

            if (!id) {
                return res.status(400).json("Missing 'id' field" );
            }

            try {
                const existingUser = await db("UserCorpData")
                    .where("id", id)
                    .first();

                if (!existingUser) {
                    return res.status(404).json("User not found" );
                }
                await db("UserCorpData")
                    .where("id", existingUser.id)
                    .del();

                res.status(200).json("User deleted successfully" );
            } catch (error) {
                console.error("Error in deleteUser:", error);
                res.status(500).json("Internal server error" );
            }
        }
}
}

module.exports = Corpdelete