const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');
const User = require('../../models/User')

module.exports = {
    register: async args =>{
        try{
            const {email,password} = args.data
            const userExisited = await User.findOne({email})
        
            if(userExisited) throw new Error('User exists already')
            const hashPassword = await bcrypt.hash(password,12)
        
            const user = new User({
                email,
                password:hashPassword
            })
            
            const result = await user.save()
        
            return {...result._doc,password:null}
        }catch(err){
            throw err
        }
        
    },
    login: async (args,req) => {
        const {email,password} = args.data;
        const user = await User.findOne({email});

        if(!user){
            throw new Error("User does not exist");
        }

        const isEqual = await bcrypt.compare(password,user.password);
        if(!isEqual){
            throw new Error("Invalid password credentials")
        }

        const token = await jwt.sign({
            userId:user.id,email:user.email},
            'somesupersecretkey',
            {
                expiresIn:'1h'
            }
        );

        return {
            userId:user.id,
            token:token,
            tokenExpiration:1,
        }


    }
   
}