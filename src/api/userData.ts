import request from "@/utils/http";

export const userDataAPI = () => {
  return request({
    url: 'userDataList',
    method: 'post'
  })
}