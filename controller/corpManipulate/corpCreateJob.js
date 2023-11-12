const db = require("../../db/db");

class CorpCreateJob {
    static async createJobListing(req, res) {
        try {
            const currentDate = new Date();            
                const { id, title, description, location } = req.body;
                
                const existingUser = await db("UserCorpData")
                    .where("id", id)
                    .first();

                if (!existingUser) {
                    return res.status(404).json({ error: 'User not found' });
                }

                const newJobListing = {
                    title,
                    company_id: existingUser.id,
                    description,
                    location,
                    postdate_at: currentDate
                };

                await db('joblisting').insert(newJobListing);

                console.log("Rendering jobListing.ejs");
                res.status(201).render('job', newJobListing);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Unable to create job listing' });
            res.status(500).render('job',"Unable to create job listing" );
        }
    }
}

module.exports = CorpCreateJob;