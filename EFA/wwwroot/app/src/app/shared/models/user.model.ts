export interface UserInfo {
    UserId?: string;
    UserName?: string;
    FirstName?: string;
    LastName?: string;
    AuthInfos?: AuthInfo[];

}

export interface AuthInfo {
    AuthCode: string;
    AuthDesc: string;
    AuthType: number;
    AuthId: number;
}
