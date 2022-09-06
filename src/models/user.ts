import { Document, Schema, Model, model } from 'mongoose';

interface IUser extends Document {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    location: string;
    age: number;
    createdAt?: Date;
}

const userSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});

const User: Model<IUser> = model('User', userSchema);

export { IUser, User };



/*   
    the route that get's the user information back to the front end, should also get all the tweets where the userId = the current userId




*/



// function login(req, res, next) {
//     let user

// let tweets = findTweetByUserId(user.userId)


// res.json({
//     userData: user,
//     tweetsFound: tweets
// })



// }




// // this would be the tweet controller
// function findTweetByUserId(id) {

//     // all tweets where userId = id


// return tweets

// }