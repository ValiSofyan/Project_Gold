const db = require("../../db/db");
const loginUse = require("./loginUser")


class userdelete {
static async deleteUser(req, res) {
    const isLoginSuccessful = await loginUse.loginUser(res);
    console.log(isLoginSuccessful);

        if(isLoginSuccessful){
            const { id } = req.body;
            console.log(id);
            if (!id) {
                return res.status(400).json("Missing 'id' field in the request body" );
            }

            try {
                const existingUser = await db("UserData")
                    .where("id", id)
                    .first();

                if (!existingUser) {
                    return res.status(404).json({ error: "User not found" });
                }

                // Delete user
                await db("UserData")
                    .where("id", id)
                    .del();

                res.status(200).json("User deleted successfully" );
            } catch (error) {
                console.error("Error in deleteUser:", error);
                res.status(500).json( "Internal server error" );
            }
        }
}
}

module.exports = userdelete