const { User } = require("../models")
const { signToken } = require('../utils/auth');

    const resolvers = {
        Query: {
        
        
        },

    Mutation:{
        addUser: async (parent, {username, email, password }) => {
            const user = await User.create({ username , email , password });
            const token = signToken(user);
            return { token, user }
        },
        loginUser: async (parent, { email , password}) => {
            const user =  await User.findOne({ email });
            const correctPw = await user.isCorrectPassword(password);
            
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
              }
            const token = signToken(user)
            return {token , user}
            }
        },
    };

module.exports = resolvers;