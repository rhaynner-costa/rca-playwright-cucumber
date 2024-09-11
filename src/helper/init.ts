//cria o diretorio test-result antes de rodar qualquer testes
const fs = require("fs-extra");
try {
    fs.ensureDir("test-result");
    fs.empty("test-result");

} catch (error) {
    console.log("diretorio test-result não foi criado " + error);

}
