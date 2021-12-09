import request from '@/utils/request'
export default {
   //根据id查询
   getVideoInfo(videoId){
    return request({
      url: `/serviceedu/edu-video-copy/getVideoInfo/${videoId}`,
      method: 'get',
    })
  },
}