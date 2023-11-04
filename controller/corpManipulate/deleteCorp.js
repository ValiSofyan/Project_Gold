const db = require("../../db/db");

class Corpdelete {
static async deleteCorp(req, res) {
    const { id } = req.body;
    

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

        // Delete the user
        await db("UserCorpData")
            .where("id", id)
            .del();

        res.status(200).json("User deleted successfully" );
    } catch (error) {
        console.error("Error in deleteUser:", error);
        res.status(500).json("Internal server error" );
    }
}
}

module.exports = Corpdelete