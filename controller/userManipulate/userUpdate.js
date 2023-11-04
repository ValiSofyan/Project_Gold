const express = require("express");
const db = require("../../db/db");

class updateUser {
    static async updateUser(req, res) {
        const currentDate = new Date();
        const { id, username, password, email, first_name, last_name, phone_number,registered_at, } = req.body;

        if (!id || (!username && !password && !email)) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        try {
            const existingUser = await db("UserData")
                .where("id", id)
                .first();

            if (!existingUser) {
                return res.status(404).json({ error: "User not found" });
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
                    registered_at,
                    updated_at: currentDate,
                });
                // console.log(db.update.registered_at);
            res.status(200).json({ message: "User updated successfully" });
        } catch (error) {
            console.error("Error in updateUser:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }
}

module.exports = updateUser;
