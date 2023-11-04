const express = require("express");
const db = require("../../db/db");

class registrationModel2 {
    static async registerCorp(req, res) {
        const currentDate = new Date()
        const { username, password, website } = req.body;

        if (!username || !password || !website) {
            return res.status(400).json("Missing required fields" );
        }

        try {
            const existingUser = await db("UserCorpData")
                .where("username", username)
                .orWhere("website", website)
                .first();

            if (existingUser) {
                return res.status(409).json("User already exists" );
            } else {
                const newUserId = await db("UserCorpData")
                    .insert({
                        username,
                        password,
                        website,
                        registered_at: currentDate
                    });

                res.status(201).json("Register succes");
            }
        } catch (error) {
            console.error("Error in registerUser:", error);
            res.status(500).json("Internal server error" );
        }
    }
}

module.exports = registrationModel2;
