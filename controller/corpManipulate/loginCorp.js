const db = require("../../db/db");


class loginModel_2 {
    static async loginCorp1(req, res) {
            if (!req.body) {
                return res=true;
            }
            const { username, password } = req.body;
    
            if (!username || !password) {
                return res.status(400).json({ error: "Missing username or password" });
                
            } 

        try {
            const user = await db("UserCorpData")
                .where({ username, password })
                .select('id', 'username', 'password')
                .first();

            if (!user) {
                return res.status(401).json({ error: "Login failed" });
            }
            res.status(200).json(`selamat datang ${username}`);

        } catch (error) {
            res.status(500).json("Internal server error");
        }
        
    }
};

module.exports = loginModel_2;
