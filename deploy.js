const fs = require( 'vinyl-fs' );
const ftp = require( 'vinyl-ftp' );
const  conn = ftp.create( {
        host: process.env.FTP_HOST,
        user: process.env.FTP_USER,
        password: process.env.FTP_PASS,
        parallel: 10,
        log: console.log
    } );
fs.src( [ './dist/**' ], { buffer: false } )
    .pipe( conn.dest( process.env.FTP_DIST ) );
