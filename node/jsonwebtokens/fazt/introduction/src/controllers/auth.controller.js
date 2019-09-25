const { Router } = require('express')
const router = Router()

const jwt = require('jsonwebtoken')
const { secret } = require('../config')
const { verifyToken } = require('./token')

const User = require('../model/user')

router.post('/signup', async (req, res, nex) => { 
  const { username, email, password } = req.body
  const user = new User({
    username,
    email,
    password
  })

  user.password = await user.encryptPassword(user.password)
  await user.save()

  const token = jwt.sign({ id: user._id }, secret, {
    expiresIn: 60*60*24
  })
  return res.json({auth: true, token })
})

router.get('/me', verifyToken, async (req, res, next) => { 
    
  const user = await User.findById(req.userId, { password: 0 })
  if (!user) {
    return res.status(404).send('No user Found')
  }

  return res.json(user)

})

router.post('/signin', async (req, res, nex) => { 
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).send('No Existe el Usuario')
    }

    const isValidPassword = await user.validatePassword(password)

    if (!isValidPassword) {
      return res.status(401).json('Password Invalido')
    }

    
    return res.json({ user , other: 'ddsk'})
    
  } catch (error) {
    console.error(error)
  }

})


module.exports = router