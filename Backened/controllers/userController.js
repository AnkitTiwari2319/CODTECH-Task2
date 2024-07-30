const User = require('../models/userSchema') ;

// create a new user 

exports.createUser = async (req , res) => {
   
    try {
        const {name , bio , profileImage , email , socialLinks} = req.body ;

        const user = new User({name , bio , profileImage , email , socialLinks});

        await user.save();

        return res.status(200).json({
            success : true ,
            message : 'User saved successfully' ,
        })


    }catch(error){
        return res.status(400).json ({
            success : false ,
            message : "unable to create user " , 
            error : error.message ,
        })
    }


};

// get all users

exports.getAllUser = async (req , res) => {

    try {

        const users = await User.find();

        if (!users || users.length === 0){
            return res.status(404).json ({
                success : false ,
                message : "user not found" ,
            });
        }

        res.status(200).json({
            success : true ,
            message : "all user data retrived successfully",
            data : users ,
        })
        

    }catch (error){

        res.status(500).json({
            success : false ,
            message : "user not retrived successfully" ,
            error : error.message ,
        });

    }
};

// get one user by id 

exports.getUser = async (req , res ) => {
    try {
        const id = req.user.id ;

    const user = await User.findById(id);

    if (!user){
        return res.status(404).json ({
            success : false ,
            message : "user not found" ,
        });
    }

    res.status(200).json({
        success : true ,
        message : "user data retrived successfully" ,
        data : user ,
    });

    }
    catch(error){
        res.status(500).json({
            success : false ,
            message : "user data not retrived successfully" ,
            error : error.message ,
        });

    }

};

// update user 

exports.updateUser = async (req , res) => {
    try {
        const { name, bio, profileImage, email, socialLinks } = req.body;

        const id = req.user.id ;

        const user = await User.findByIdAndUpdate(
            id ,
            {   name ,
                bio, 
                profileImage,
                email, 
                socialLinks   
            },
            {new : true },
        )

        if (!user){
            return res.status(404).json({
                success : false ,
                message : "user not found" ,
            });
        }

        res.status(200).json({
            success : true ,
            message : "user updated successfully",
        });

    }catch(error){
        res.status(500).json({
            success : false ,
            message : "Failed to update user" ,
            error : error.message ,
        });
    }


};


// delete the user 

exports.deleteUser = async (req , res) => {
    try {
        const id = req.user.id ;

    const user = await User.findByIdAndDelete(id);

    if (!user){
        return res.status(404).json({
            success : false ,
            message : "user not found" ,
        });
    }

    res.status(200).json({
        success : true ,
        message : "user deleted successfully",
    });


    }catch (error){
        res.status(500).json ({
            success : false ,
            message : "Failed to deleted user",
            error: error.message,
        });
    }


};


