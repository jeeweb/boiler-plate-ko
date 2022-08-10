const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true, //space여백을 없애줌
  },
  password: {
    type: String,
    minlength: 5
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role: {   // 사용자권한
    type: Number,
    default: 0
  },
  image: String,
  token: {  //유효성관리
    type: String
  },
  tokenExp: { //토큰의 유효기간
    type: Number
  }
});

const User = mongoose.model('User', userSchema);

module.exports = { User };