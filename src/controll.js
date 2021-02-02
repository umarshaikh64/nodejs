

const convertDocument = async (input, output) => {
    return new Promise((resolve, reject) => {
    exec(`ebook-convert ${input} ${output}`,
    (error, stdout) => {
    if (error !== null) {
    reject(error);
    }
    else {
    resolve(stdout);
    }
    });
    });
    };
    
    module.exports ={convertDocument}