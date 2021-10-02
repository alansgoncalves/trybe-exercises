### Agora a prática

1. Crie um script que mostre na tela o conteúdo de um arquivo escolhido pela pessoa usuária:
    1. Pergunte à pessoa usuária qual arquivo ela deseja ler.
    2. Leia o arquivo indicado.
    3. Caso o arquivo não exista, exiba na tela "Arquivo inexistente" e encerre a execução do script.
    4. Caso o arquivo exista, escreva seu conteúdo na tela.

2. Crie um script que substitua uma palavra por outra em um arquivo escolhido pela pessoa usuária:
    1. Pergunte à pessoa usuária qual arquivo ela deseja utilizar.
    2. Leia o arquivo.
    3. Caso o arquivo não exista, exiba um erro na tela e encerre a execução do script.
    4. Caso o arquivo exista, solicite a palavra a ser substituída.
    5. Solicite a nova palavra, que substituirá a palavra anterior.
    6. Imprima na tela o conteúdo do arquivo com as palavras já substituídas.
    7. Pergunte o nome do arquivo de destino.
    8. Salve o novo arquivo no caminho de destino.

Dica: Utilize a classe RegExp do JS para substituir todas as ocorrências da palavra com replace(new RegExp(palavra, 'g'), novaPalavra) .