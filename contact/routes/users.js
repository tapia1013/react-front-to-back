const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config')
const { check, validationResult } = require('express-validator/check')



const User = require('../models/User')





// @route       POST api/users
// @desc        Register a user
// @access      Public
router.post('/', [
  check('name', 'Please add a name').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({
    min: 6
  })
],
  async (req, res) => {
    const errors = validationResult(req)
    // check to see if err is empty
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }


    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email: email })

      if (user) {
        return res.status(400).json({ msg: 'User alreadt exists' })
      }

      user = new User({
        name,
        email,
        password
      });

      // encrypt
      const salt = await bcrypt.genSalt(10);
      // hash pw
      user.password = await bcrypt.hash(password, salt)

      // save hash/salted pw/user to DB
      await user.save();


      // send back JWT
      // res.send('User saved to DB')
      const payload = {
        user: {
          id: user.id
        }
      }

      // signToken to generate token (payload, secret, {options})
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      )

    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }



  })


module.exports = router;

