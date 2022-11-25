import User from './database';

export default {
  Query: {
    me: async () => {
      const object = { id: 1, name: 'john' };
      const result = await object;
      return result;
    },

    // singleUser: async (root, args) => {
    //   const { email, userId } = args;
    //   let user;
    //   if (userId) {
    //     user = await User.findOne({ _id: userId });
    //   } else {
    //     await User.findOne({
    //       email: email.toLowerCase(),
    //     });
    //   }
    //   if (!user) {
    //     throw new Error('Invalid User');
    //   }
    //   return user;
    // },

    // allUsers: async (root, args) => {
    //   const users = await User.find()
    //     .limit(args.limit || 50);
    //   const totalUsers = await User.find().count();
    //   return { totalUsers, users };
    // },
  },

  Mutation: {
    addUser: async (root, args) => {
      const { name, email, telephone } = args;
      const data = {
        name,
        email,
        telephone,
      };
      const user = new User(data);
      await user.save();
      return user;
    },
  },
};
