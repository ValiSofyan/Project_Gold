const db = require("../../db/db");

class loginModel {
    static async loginUser(req, res) {
        const UserData = req.body;
        if (!req.body) {
            res.render('loginuser', { message: 'No request body provided' });
            return null;
        }

        if (!UserData.username || !UserData.password) {
            res.render('loginuser', { message: 'Missing username or password' });
            return null;
        }

        try {
            const user = await db("UserData")
                .where(UserData)
                .select('id', 'username', 'password')
                .first();

            if (!user) {
                res.render('loginuser', { message: 'Login failed' });
                return null;
            }
            // console.log(user.username);
            return user;
        } catch (error) {
            console.error("Error in loginUser:", error);
            res.render('loginuser', { message: 'Internal server error' });
            return null;
        }
    }
}

module.exports = loginModel;
