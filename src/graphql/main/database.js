import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      index: true,
      lowercase: true,
      trim: true,
      // unique: true,
    },
    email: {
      type: String,
      required: false,
      index: true,
      lowercase: true,
      trim: true,
      // unique: true,
    },
    telephone: {
      type: String,
      index: true,
      trim: true,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    toJSON: {
      virtuals: true,
      transform(doc, ret) {
        // eslint-disable-next-line no-param-reassign
        delete ret.password;
      },
    },
  },
);

UserSchema.methods.comparePassword = async function (candidatePassword) {
  // eslint-disable-line
  const result = await bcrypt.compareSync(candidatePassword, this.password);
  return result;
};

const getModel = () => {
  if (mongoose.models.User) {
    return mongoose.model('User');
  }
  return mongoose.model('User', UserSchema);
};

export default getModel();
