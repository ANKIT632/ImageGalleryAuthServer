import exp from 'constants';
import crypto from 'crypto';

// const secret = process.env.SECRET_KEY;

// console.log(secret);

export function getHashPassword({password, salt}) {
      
    const hashPassword = crypto.createHmac('sha256', salt)
    .update(password)
    .digest('hex');

    return hashPassword;

}


export function generateSalt() {
    return crypto.randomBytes(10).toString('hex');
}
