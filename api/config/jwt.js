const fs = require('fs');
fs.readFile('.env', 'utf8', function (error,data) {
    if (error) return console.log(error);

    const result = data.replace(
        /JWT_SECRET_KEY=.*/,
        'JWT_SECRET_KEY=' + require('crypto').randomBytes(64).toString('hex')
    );

    fs.writeFile('.env', result, 'utf8', function (error) {
        if (error) return console.log(error);
    });

    console.log('JWT_SECRET_KEY was successfully generated!');
});
