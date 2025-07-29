    import bcrypt from 'bcryptjs';


    const users = [
        {   
            name: 'Admin User',
            email: 'admin@email.com',
            password: bcrypt.hashSync('123456', 10), // Hashing the password
            isAdmin: true, // Admin user
        },
        { name: 'John Doe',
            email: 'john@email.com',
            password: bcrypt.hashSync('123456', 10), // Hashing the password
            isAdmin: false, // Regular user 
        },
        { name: 'Jane Doe',
            email: 'Jane@email.com',
            password: bcrypt.hashSync('123456', 10), // Hashing the password
            isAdmin: false, // Regular user
        },
    ];

    export default users;
// backend/data/users.js
// This file contains the user data to be seeded into the database.