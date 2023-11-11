const db = require("../../db/db");
const loginModel_2 = require("./loginCorp");

class CorpCreateJob {
    static async createJobListing(req, res) {
        try {
            const currentDate = new Date();
            const isLoginSuccessful = await loginModel_2.loginCorp1(res);
            
            if (isLoginSuccessful) {
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

                // Render the EJS view with the job details
                console.log("Rendering jobListing.ejs");
                res.status(201).render('job', newJobListing);

            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Unable to create job listing' });
            res.status(500).render('job',"Unable to create job listing" );
        }
    }
}

module.exports = CorpCreateJob;



// class createJob {
//     static async createJobListing(req, res) {
//         try {
//             const currentDate = new Date();
//             const isLoginSuccessful = await loginModel_2.loginCorp1(res);
//             console.log(isLoginSuccessful);

//             if (isLoginSuccessful) {
//                 const { id, title, description, location } = req.body;

//                 const existingUser = await db("UserCorpData")
//                     .where("id", id)
//                     .first();

//                 if (!existingUser) {
//                     return res.status(404).json({ error: 'User not found' });
//                 }

//                 await db('joblisting')
//                     .insert({
//                         title,
//                         company_id: existingUser.id,
//                         description,
//                         location,
//                         postdate_at: currentDate
//                     });

//                 res.status(201).json("Created job vacancy successfully!");
//             } 
//         } catch (error) {
//             res.status(500).json({ error: 'Unable to create job listing' });
//         }
//     }
// }

// module.exports = createJob;
