class User {
    constructor(id, userName, email, password, interests) {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.interests = interests;
    }
}

const users = [
    new User(1, "newUser", "user@email.com", "password1234", ["Electronics", "Apparel", "Accessories"]),
]

module.exports = { users };