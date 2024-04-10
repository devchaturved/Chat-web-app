import jwt from 'jsonwebtoken'

const generateTokenandSetCookie = (userId,res) =>{
    const  token = jwt.sign({ userId }, process.env.JWT_SECRET,{
        expiresIn: '15d'
    });

    res.cookie("jwt",token,{
        maxAge: 15 * 24 * 60 * 60 * 1000, //ms
        httpOnly: true, // prevent XSS attcks cross-site attcks
        sameSite:"strict", //protect against csrf attacks
        secure: process.env.NODE_ENV !== "development" //
    })
};

export default generateTokenandSetCookie;