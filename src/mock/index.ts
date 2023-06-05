import Mock from "mockjs"
import getData from './test'
import userData from './user'

Mock.mock('/api/test', 'get', getData.testData)
Mock.mock('/api/userDataList', 'post', userData.userDataList)

export default Mock