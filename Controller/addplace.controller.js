const addPost  = require('../Models/AddPlace.model.js')



exports.AddPlace = async(req, res) => {
    
       
        
        const {imageurls, heading, description, locationUrl } = req.body;
        
        if (!heading || !description || !locationUrl 
            || !imageurls
        ) {
            return res.status(400).json({ message: "Please provide heading, description, and location URL" });
        }

   
        // Generate image URLs (assuming images are served statically from 'uploads' folder)
        

        try {
            // Save to MongoDB
            const newPost = await addPost.create({
                imageurls,
                heading,
                description,
                locationUrl
            });

            return res.status(201).json({ message: "Post created successfully", addPost: newPost });
        } catch (error) {
            console.error("Error creating post:", error);
            return res.status(500).json({ message: "Internal Server Error" });
        
    }
};

exports.updatePlace = async (req, res) => {
    const { id } = req.params; // Get the place ID from the URL params
    const { imageurls, heading, description, locationUrl } = req.body;

    // Validate request
    if (!heading || !description || !locationUrl || !imageurls) {
        return res.status(400).json({ message: "Please provide heading, description, location URL, and image URLs" });
    }

    try {
        // Find and update the place by ID
        const updatedPost = await addPost.findByIdAndUpdate(
            id, 
            { imageurls, heading, description, locationUrl },
            { new: true } // Return updated document
        );

        if (!updatedPost) {
            return res.status(404).json({ message: "Post not found" });
        }

        return res.status(200).json({ message: "Post updated successfully", post: updatedPost });
    } catch (error) {
        console.error("Error updating post:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
exports.getPlaces = async (req, res) => {
    try {
        const places = await addPost.find();
        return res.status(200).json({ message: "Places retrieved successfully", places });
    } catch (error) {
        console.error("Error fetching places:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};