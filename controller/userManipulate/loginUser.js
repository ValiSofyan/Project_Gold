const db = require("../../db/db");

class loginModel {
    
    static async loginUser(req, res) {
        if (!req.body) {
            return res.render('error', { message: 'No request body provided' });
        }
        const UserData = req.body;
            
        if (!UserData.username || !UserData.password) {
            return res.render('error', { message: 'Missing username or password' });
        }

        try {
            const user = await db("UserData")
                .where(UserData)
                .select('id', 'username', 'password')
                .first();

            if (!user) {
                return res.render('error', { message: 'Login failed' });
            }

            res.render('welcome', { username: user.username });
        } catch (error) {
            console.error("Error in loginUser:", error);
            res.render('error', { message: 'Internal server error' });
        }
    }
}

module.exports = loginModel;
