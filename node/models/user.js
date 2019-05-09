export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: 'Please enter your username',
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: 'Please enter your email address',
        },
        unique: {
          args: true,
          msg: 'Email already exists',
        },
        validate: {
          isEmail: {
            args: true,
            msg: 'Please enter a valid email address',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: 'Please enter a password',
        },
        validate: {
          isNotShort: value => {
            if (value.length < 8) {
              throw new Error('Password should be at least 8 characters')
            }
          },
        },
      },
      nickname: {
        type: DataTypes.STRING,
        allowNull: true
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      profileReady: {
        type: DataTypes.BOOLEAN,
        allowNull: {
          args: false,
          msg: 'Profile should be defined as ready or not'
        }
      },
      tutorialWatched: {
        type: DataTypes.BOOLEAN,
        allowNull: {
          args: false,
          msg: 'Tutorial should be defined as watched or not'
        }
      }
    },
    {}
  )
  // User.associate = models => {
  // associations can be defined here
  //
  return User
}