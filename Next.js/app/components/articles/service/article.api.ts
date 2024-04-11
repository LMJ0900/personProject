import { instance } from "../../common/configs/axios-config"


export const findAllArticlesAPI = async (page: number) =>{
    try{
        const response = await instance.get('/articles/list',{
            params: {page}
        })
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
}
export const findArticleByIdAPI = async (id: number) =>{
    try{
        const response = await instance.get('/articles/detail',{
            params: {id}
        })

        return response.data
    }catch(error){
        console.log(error)
        return error
    }
    
}
export const deleteByIdAPI = async (id: number) =>{
    try{
        const response = await instance.delete('/articles/detail',{
            params: {id}
        })

        return response.data
    }catch(error){
        console.log(error)
        return error
    }
}