Import meetups from 'model/UserModel';

export const createUser = async (req,res) => {
     const { name,lastName,password,email} = req.body;
     const newUser = new UserModel({name,lastName,password,email});

     try{
        return res.status(201).json({ user: await newUser.save()});
     } catch(e){
        return res.status(e.status).json({error:true,message: "Error creating the user"});
     }

}
