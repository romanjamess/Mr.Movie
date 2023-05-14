const { User } = require("../models")
const { signToken } = require('../utils/auth');

    const resolvers = {
       Query: {
          me: async (parent , args, context) => {
            return await User.findById( context.user._id)
          }
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
            },
        removeBook: async (parent, {bookId}, context) => {
           return User.findOneAndUpdate({
           _id: context.user._id
           }, {$pull: { savedBooks: {bookId} }})
        },
        saveBook: async (parent , args, context) => {
            return User.findByIdAndUpdate({
                _id: context.user._id
            }, {$addToSet: {savedBooks: args}})
        }
        },
    };

module.exports = resolvers;