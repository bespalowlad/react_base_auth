import { IUser, TUserResponse } from '../types/api.types'

export interface IOptions {
    method: 'POST' | 'GET' | 'DELETE'
    headers: any
    body: string
}

export interface IResponse {
    ok?: boolean
    status?: number
    text: () => Promise<string>
}

declare global {
    interface Window {
        fetch: any
    }
}

// array in local storage for registered users
let users: IUser[] = JSON.parse(localStorage.getItem('users')!) || []

function configureFakeBackend() {
    let realFetch = window.fetch

    window.fetch = function (url: string, opts: IOptions): Promise<IResponse> {
        const { method, headers } = opts;
        const body = opts.body && JSON.parse(opts.body);

        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(handleRoute, 500);

            function handleRoute() {
                switch (true) {
                    case url.endsWith('/users/authenticate') && method === 'POST':
                        return authenticate();
                    case url.endsWith('/users/register') && method === 'POST':
                        return register();
                    case url.endsWith('/users') && method === 'GET':
                        return getUsers();
                    case url.match(/\/users\/\d+$/) && method === 'DELETE':
                        return deleteUser();
                    case url.endsWith('/profile') && method === 'GET':
                        return getProfile()
                    default:
                        // pass through any requests not handled above
                        return realFetch(url, opts)
                            .then((response: any) => resolve(response))
                            .catch((error: any) => reject(error));
                }
            }

            // route functions

            function authenticate() {
                const { username, password } = body;
                const user = users.find((user: IUser) => user.username === username && user.password === password);

                if (!user) return error('Username or password is incorrect');

                return ok({
                    id: user.id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    token: `fake-jwt-token-${user.id}`
                });
            }

            function register() {
                const user: IUser = body;

                if (users.find((u: IUser) => u.username === user.username)) {
                    return error(`Username ${user.username} is already taken`);
                }

                // assign user id and a few other properties then save
                user.id = users.length ? Math.max(...(users as IUser[]).map((user: IUser) => user.id)) + 1 : 1;

                // users.push(user);
                users = [...users, user]

                localStorage.setItem('users', JSON.stringify(users));

                const { password, ...currentUser } = user
                console.log('currentUser: ', currentUser)

                return ok({
                    ...currentUser
                });
            }

            function getProfile() {
                if (headers['Authorization'].includes('Bearer fake-jwt-token')) {
                    const token: string = headers['Authorization'].split(' ')[1]
                    const user: IUser | undefined = users.find(user => user.token === token)

                    if (user) {
                        return ok({
                            id: user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                            token: `fake-jwt-token-${user.id}`
                        })
                    }
                }
            }

            function getUsers() {
                if (!isLoggedIn()) return unauthorized();

                return ok(users);
            }

            function deleteUser() {
                if (!isLoggedIn()) return unauthorized();

                users = users.filter(x => x.id !== idFromUrl());
                localStorage.setItem('users', JSON.stringify(users));
                return ok();
            }

            // helper functions
            function ok(body?: TUserResponse | TUserResponse[]) {
                resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) });
            }

            function unauthorized() {
                resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorized' })) });
            }

            function error(message: string) {
                resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) });
            }

            function isLoggedIn() {
                return headers['Authorization'] === 'Bearer fake-jwt-token';
            }

            function idFromUrl() {
                const urlParts = url.split('/');
                return parseInt(urlParts[urlParts.length - 1]);
            }
        });
    }
}

export default configureFakeBackend