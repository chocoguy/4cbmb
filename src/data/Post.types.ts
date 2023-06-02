export type Post = {
    //required fields
    no : number,
    time : number,
    resto : number,
    now : string,
    //OP only fields
    replies : number,
    images : number,
    unique_ips : number,
    //optional fields
    tim : number,
    filename : string,
    ext : string,
    com : string,
    sub : String, //subject
    w : number,
    h : number,
    tn_w : number,
    tn_h : number,
    //custom fields
    image_url : string,
    thumbnail_url : string,
}