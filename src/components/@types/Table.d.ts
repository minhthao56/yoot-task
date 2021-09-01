


interface ITable{ 
    thead: Array<string>;
    tbody: Array<{
        name?: string,
        device?: string,
        state?: string,
        infoCreated?: string,
        infoEdit?: string,
    }>;
}