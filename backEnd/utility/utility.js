
var jwt=require('jsonwebtoken');

module.exports={
    generateToken(payload){
        const token=jwt.sign({payload},'secretekey',{expiresIn:'2h'})
        const obj={
            success :true,
            message :'Token Generated !!',
            token :token
        }
        return obj;
    }
}