const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req,res) => {
       const db = req.app.get('db')
       const { email, password, username } = req.body
        const user = await db.find_email([email])
        if(user.length > 0){
            return res.status(200).send('email in use')
        }
        const salt = bcrypt.genSaltSync(10)//10 represents the number of cyles
        const hash = bcrypt.hashSync(password, salt)
        const newUser = await db.insert_user_info({username, email})//newUser:; [{user_id: 1,...}] 
        db.insert_hash({hash, user_id: newUser[0].id}).then(() => {
            db.create_account([newUser[0].user_id])
            req.session.user = newUser[0]
            res.status(200).send({message: 'Logged in', user: req.session.user, loggedIn: true})
        })
        .catch(err => {
            res.status(400).send({message: 'failed to register'})
        })
    },
    logout: (req,res) => {
        req.session.destroy()
        res.status(200).send({message: 'logged out', loggedIn: false})
        res.redirect('/')
    },
    // login: async (req,res) => {
    //     const db = req.app.get('db')
    //     const { email, password } = req.body
    //     const user = await db.find_email_hash([email])
    //     if(user.length === 0){
    //         return res.status(400).send({message: 'email not found'})
    //     }
    //     const result = bcrypt.compareSync(password, user[0].hash)
    //     if(result){
    //         delete user[0].hash
    //         req.session.user = user[0]
    //         return res.status(200).send({message: 'logged in', user: req.session.user, loggedIn: true})
    //     }

    // },
    login: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
        const user = await db.find_email_hash([email])
        if (user.length === 0) {
          return res.status(400).send({message: 'Email not found'})
        }
        const result = bcrypt.compareSync(password, user[0].hash)
        if (result) {
          delete user[0].hash
          req.session.user = user[0]
          return res.status(200).send({message: 'Logged in', user: req.session.user, loggedIn: true})
        }
      }
}