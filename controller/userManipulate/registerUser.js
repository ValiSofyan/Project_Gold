const express = require("express");
const db = require("../../db/db");

class registrationModel {
    static async registerUser(req, res) {
        const currentDate = new Date()
        const { username, password, email, first_name, last_name, phone_number } = req.body;

        if (!username || !password || !email) {
            return res.status(400).json("Missing required fields" );
        }

        try {
            
            const existingUser = await db("UserData")
                .where("username", username)
                .orWhere("email", email)
                .first();

            if (existingUser) {
                return res.status(409).json("User already exists" );
            } else {
                const newUserId = await db("UserData")
                    .insert({
                        username,
                        password,
                        email,
                        first_name,
                        last_name,
                        phone_number,
                        registered_at:currentDate
                    });

                res.status(201).json("Register succes");
            }
        } catch (error) {
            console.error("Error in registerUser:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }
}

module.exports = registrationModel;
