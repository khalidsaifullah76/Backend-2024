function download() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = "windows-10.exe"; 
            resolve(result); 
        }, 3000); 
    });
}


function showDownload(result) {
    console.log("Download selesai");
    console.log("Hasil Download: " + result);
}
async function main() {
    try {
        const result = await download(); 
        showDownload(result); 
    } catch (error) {
        console.error("Terjadi kesalahan:", error); 
    }
}

main();
