const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./Model');

const buildAuthResponse = (user) => {
  const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: '24h' });

  return {
    token,
    name: user.username,
    role: user.role,
    id: user._id,
    email: user.email,
    avatar: user.avatar,
  };
};

const UserController = {
  registerUser: async (req, res) => {
    try {
      const { name, type, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        username: name,
        email: email,
        password: hashedPassword,
        role: type,
      });

      res.status(201).json(buildAuthResponse(newUser));
    } catch (error) {
      res.status(500).json({ error: 'An error occurred during registration.' });
    }
  },

  loginUser: async (req, res) => {
    try {
      const { email , password } = req.body;
      const user = await User.findOne({ email: email });

      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      const passwordsMatch = await bcrypt.compare(password, user.password);

      if (!passwordsMatch) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      res.json(buildAuthResponse(user));
    } catch (error) {
      res.status(500).json({ error: 'An error occurred during login.' });
    }
  },

  getUserProfile: async (req, res) => {
    try {
      // Implement logic to get user profile by ID using req.params.user_id
      const userId = req.params.user_id;
      const userProfile = await User.findById(userId);
      if (userProfile) {
        res.status(200).json(userProfile);
      } else {
        res.status(404).json({ error: 'User not found.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching user profile.' });
    }
  },
};

module.exports = UserController;

