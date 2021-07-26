export interface IUser {
    googleId?: string;
    twitterId?: string;
    githubId?: string;
    username: string;
    __v: number;//Version
    _id: string;//Unique ID to the database
}