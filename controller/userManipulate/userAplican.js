const db = require("../../db/db");
const loginUse = require("./loginUser")


class createApplication {
    
    static async createApply(req, res) {
        const applied_at = new Date()
        const isLoginSuccessful = await loginUse.loginUser(res);
        console.log(isLoginSuccessful);

        try {
            if(isLoginSuccessful){
                const { id,iduser} = req.body;

                const existingJob = await db("joblisting")
                    .where("id", id)
                    .select("skilldata_id","id")
                    .first();
                console.log(existingJob.skilldata_id);
                const existingSkill = await db("UserData")
                    .where("id", iduser)
                    .select("skilldata_id","id")
                    .first();
                console.log(existingSkill.skilldata_id);

                if (!existingJob) {
                    return res.status(404).json({ error: 'Job not found' });
                }

                if (existingJob.id && existingSkill.skilldata_id === existingJob.skilldata_id){
                    await db("application")
                    .insert({
                        job_id: existingJob.id,
                        user_id: existingSkill.id, 
                        aplicationDate_at: applied_at,
                    });
                    res.status(201).json("Apply succes");
                }else{
                    res.status(500).json({ error: 'Your Skill not not match with the requirement' });
                }
            }
        } catch (error) {
            res.status(500).json({ error: 'Unable to Apply Job' });
        }
    }
}


module.exports = createApplication;
