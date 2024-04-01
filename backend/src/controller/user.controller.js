import { User } from "../models/user.model.js"


const registerUser = async (req, res) => {
    const {username, email, fullName, password} = req.body

    if(
        [username, email, fullName, password].some((field) => field?.trim()==="")
    ){
        console.log("All fields must be filled out.")
    }

    const existedUser =  await User.findOne({
        $or: [{email}, {username}]
    })


    if(existedUser){
        console.log ("User already existed with email or username")
    }

    const user = await User.create(
        req.body
    )

    const createdUser = await User.findById(user._id).select('-password')
    
    return res.status(201).json({user: createdUser, message: "User created successfully"})

}

const loginUser = async (req, res) => {
    const {email, password} = req.body

    if(!email)
    {
        console.log("email or password is required")
    }

    const user = await User.findOne({email})

    if(!user){
        console.log("user doesn't exist")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)
    if (!isPasswordValid) {
        console.log("invalid user credentials!!")
    }

    return res.status(200)
    .json({message: "User logged in successfully"})
}
export {
    registerUser,
    loginUser
}
