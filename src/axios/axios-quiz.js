import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-fdb27-default-rtdb.firebaseio.com/'
})