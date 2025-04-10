const Feedback = require("../Models/Addfeedback.model.js");
exports.addFeedback = async (req, res) => {
    try {
        const { name, rating, phone, feedback, isbutton,ishomepage } = req.body;

        // Validation check

        if (!name || !rating || !phone || !feedback  ) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Additional validation for email and phonenumber
        const phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number

       
        if (!phoneRegex.test(phone)) {
            return res.status(400).json({ message: "Invalid phone number format" });
        }

        // Create new feedback entry
        const newFeedback = await Feedback.create({
            name,
            rating,
            phone,
            feedback,
            isbutton,
            


        });

        return res.status(201).json({ message: "Feedback submitted successfully", feedback: newFeedback });

    } catch (error) {
        console.error("Error adding feedback:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.updateFeedbackIsButton = async (req, res) => {
    try {
        const { id } = req.params;  // Get feedback ID from URL params
        const { isbutton, } = req.body;  // Get new isbutton value from request body

        // Validate input
        if (isbutton === undefined) {
            return res.status(400).json({ message: "isbutton field is required" });
        }

        // Find and update the feedback entry
        const updatedFeedback = await Feedback.findByIdAndUpdate(
            id,
            { isbutton },
            { new: true }  // Return the updated document
        );

        // If feedback not found
        if (!updatedFeedback) {
            return res.status(404).json({ message: "Feedback not found" });
        }

        return res.status(200).json({ message: "Feedback updated successfully", feedback: updatedFeedback });

    } catch (error) {
        console.error("Error updating feedback:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.updateFeedbackIshomepage = async (req, res) => {
    try {
        const { id } = req.params;  // Get feedback ID from URL params
        const { ishomepage, } = req.body;  // Get new isbutton value from request body

        // Validate input
        if (ishomepage === undefined) {
            return res.status(400).json({ message: "isbutton field is required" });
        }

        // Find and update the feedback entry
        const updatedFeedback = await Feedback.findByIdAndUpdate(
            id,
            { ishomepage },
            { new: true }  // Return the updated document
        );

        // If feedback not found
        if (!updatedFeedback) {
            return res.status(404).json({ message: "Feedback not found" });
        }

        return res.status(200).json({ message: "Feedback updated successfully", feedback: updatedFeedback });

    } catch (error) {
        console.error("Error updating feedback:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};



exports.getAllFeedbacks = async (req, res) => {
    try {
        // Fetch all feedback entries from the database
        const feedbacks = await Feedback.find();

        if (!feedbacks || feedbacks.length === 0) {
            return res.status(404).json({ message: "No feedbacks found" });
        }

        return res.status(200).json({ message: "Feedbacks retrieved successfully", feedbacks });
    } catch (error) {
        console.error("Error fetching feedbacks:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
