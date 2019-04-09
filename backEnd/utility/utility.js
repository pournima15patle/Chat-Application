/*****************************************************************************************************
 *  @Purpose  : To server creates a token using the desired payload and a secret key. 
 *              the user for reseting the password
 *  @author   : pournima15patle
 *  @version  : 1.0
 *  @since    : 19-03-2019
 *****************************************************************************************************/
var jwt=require('jsonwebtoken');

module.exports={
    //to generate token
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