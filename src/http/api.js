import {get} from './index'

const API = {
    searchKeyword:'/search/default',//获取默认搜索关键词
    banner:'/banner',//获取首页banner
    homepage:'/homepage/block/page',
    ball:'/homepage/dragon/ball'
}

export function searchKeyword(){
    return get(API.searchKeyword)
}

export function getBanner(){
    return get(API.banner)
}

export function getHomepage(){
    return get(API.homepage)
}

export function getHomepageBall(){
    return get(API.ball)
}