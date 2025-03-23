const User = require("../Models/Login.models.js");
const bcrypt = require("bcrypt");

exports.Logincreate = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Please enter both username and password" });
        }

        console.log("Received request to create user:", username);

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = await User.create({ username, password: hashedPassword });

        console.log("User created successfully:", newUser);

        return res.status(201).json({ message: "User Created Successfully" });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.Loginverify = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Please enter both username and password" });
        }

        console.log("Login attempt for user:", username);

        // Find user in the database
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        // Compare entered password with stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        console.log("User logged in successfully:", username);
        return res.status(200).json({ message: "Login successful" });

    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};