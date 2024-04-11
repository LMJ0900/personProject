export interface IArticle{
    id? : number
    title? : string
    content? : string
    regDate? : string
    modDate? : string
    writer? : string
    json?: {}
    array?: IArticle[]
}