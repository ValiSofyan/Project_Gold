const express = require("express");
const db = require("../../db/db");

class updateUser {
    static async updateUser(req, res) {
        const { id, username, password, email, first_name, last_name, phone_number } = req.body;

        if (!id || (!username && !password && !email)) {
            return res.status(400).json("Missing required fields" );
        }

        try {
            const existingUser = await db("UserData")
                .where("id", id)
                .first();

            if (!existingUser) {
                return res.status(404).json("User not found" );
            }
            await db("UserData")
                .where("id", id)
                .update({
                    username,
                    password,
                    email,
                    first_name,
                    last_name,
                    phone_number,
                });

            res.status(200).json("User updated successfully" );
        } catch (error) {
            console.error("Error in updateUser:", error);
            res.status(500).json("Internal server error" );
        }
    }
}

module.exports = updateUser