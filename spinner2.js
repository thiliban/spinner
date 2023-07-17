const spin = ['|', '/', '-', '\\','|', '/', '-', '\\'];
for(let i = 0; i < spin.length; i++) {
    if (i === spin.length - 1) {
        setTimeout(() => {
            process.stdout.write(`\r${spin[i]} \n`)    
        }, 300 + (i * 200));
    }
    else {
        setTimeout(() => {
            process.stdout.write(`\r${spin[i]}  `);
        }, 300 + (i * 200));
    }
}