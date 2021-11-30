### Agora, a prática

Vamos juntar tudo o que aprendemos até aqui e exercitar mais ainda nosso aprendizado!
Antes de começar, crie um projeto chamado multer-exercises utilizando o comando npm init @tryber/backend multer-exercises .

Depois de criar o projeto, instale o multer acessando a pasta e executando o comando npm i multer dentro dela.
Agora sim! ✅ Tudo pronto para começar os exercícios!

1. Crie o endpoint POST /upload

2. O endpoint deve receber apenas um arquivo no campo file ;

3. O arquivo deve ser armazenado na pasta uploads ;

4. O arquivo armazenado deve ter o timestamp do upload (obtido com Date.now() ) seguido do nome original do arquivo. Exemplo, para o arquivo profile.png , o nome armazenado deve ser algo como 1616691266095-profile.png, já que o timestamp será diferente a cada vez.

5. Retorne status 200 OK se der tudo certo.

6. Altere o endpoint POST /upload para que atenda os seguintes critérios:

7. Apenas aceite arquivos cuja extensão seja .png ; Caso o arquivo tenha outro tipo de extensão, retorne o status 403 Forbidden com o JSON a seguir:

```
    {
        "error": { "message": "Extension must be `png`" }
    }
```

8. Não aceite um arquivo cujo nome (ignorando o timestamp) já exista na pasta uploads . Caso o arquivo já exista, retorne o status 409 Conflict com o seguinte JSON:

```
    {
        "error": { "mesage": "File already exists" }
    }
```

Dica: procure sobre fileFilter no multer, pode ajudar.

9. Torne a pasta uploads pública de forma que seja possível baixar os arquivos enviados anteriormente.