const db = require("../../db/db");

class loginModel_2 {
    static async loginCorp1(req, res) {
        const { website, password } = req.body;
        if (!req.body) {
            res.render('logincorp', { error: true });
            console.log(website,"2");
            return null;
        }
        
        
        if (!website || !password) {
            res.status(400).render('logincorp', { error: "Missing website or password" });
            return null;
        }
        console.log(website,password);

        try {
            const user = await db("UserCorpData")
                .where({ website, password })
                .select( 'website', 'password')
                .first();

            if (!user) {
                res.status(401).render('logincorp', { error: "Login failed" });
                return null;
            }

            // Return user object instead of rendering directly
            return user;

        } catch (error) {
            console.error("Error in loginCorp1:", error);

            // Return error instead of rendering directly
            return { error: "Internal server error" };
        }
    }
}

module.exports = loginModel_2;
