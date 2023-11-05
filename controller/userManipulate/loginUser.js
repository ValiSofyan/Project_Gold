const db = require("../../db/db");

class loginModel {
    
    static async loginUser(req, res) {
        if (!req.body) {
            return res=true;
        }
        const UserData = req.body;
            
        if (!UserData.username || !UserData.password) {
            return res.status(400).json("Missing username or password" );
        }

        try {
            const user = await db("UserData")
                .where(UserData)
                .select('id', 'username', 'password')
                .first();

            if (!user) {
                return res.status(401).json("Login failed" );
            }

            res.status(200).json(`selamat datang ${user.username}`);
        } catch (error) {
            console.error("Error in loginUser:", error);
            res.status(500).json("Internal server error" );
        }
    }
}

module.exports = loginModel;
