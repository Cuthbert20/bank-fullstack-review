const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db')
    const { email, password, username } = req.body

    const user = await db.find_email([email])
    if (user.length > 0) {
      return res.status(400).send({ message: 'Email in use.' })
    }
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    const newUser = await db.insert_user_info({ username, email }) // newUser: [{}]
    db.insert_hash({ hash, user_id: newUser[0].user_id })
      .then(() => {
        req.session.user = newUser[0] // newUser: [{}], newUser[0]: {}
        res
          .status(200)
          .send({
            message: 'Logged in',
            user: req.session.user,
            loggedIn: true
          })
      })
      .catch(err => {
        res.status(500).send({message: 'Failed to register'})
      })
  },
  logout: (req, res) => {
    req.session.destroy()
    res.status(200).send({message: 'Logged out'})
    res.redirect('/')
  }
}
