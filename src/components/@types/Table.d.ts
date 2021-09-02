
interface infoCreated{
    username: string;
    dateCreated: string;
}
interface infoEdit{
    username: string;
    dateEdit: string;
}

interface ITable{ 
    thead: Array<string>;
    tbody: Array<{
        name?: string,
        device?: string,
        state?: string,
        username?: string,
        infoCreated: infoCreated,
        infoEdit: infoEdit,

        [key: string]: any;
    }>;
}