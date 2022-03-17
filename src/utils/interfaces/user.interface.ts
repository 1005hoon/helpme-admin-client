interface IUser {
    _id?: string;
    email: string;
    group: string;
    name: string;
    role: string;
    thumbnail_url: string;
    is_deleted: boolean;
}

export default IUser;
