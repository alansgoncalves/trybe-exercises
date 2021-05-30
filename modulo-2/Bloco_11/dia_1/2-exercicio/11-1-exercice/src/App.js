
import './App.css';

//1. Crie um novo projeto utilizando npx create-react-app nome-app e acesse a pasta nome-app
//2. Crie uma lista de tarefas simples seguindo os passos abaixo
//3. agora, chame a função dentro do seu componente App (não se esqueça da sintaxe JSX!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando npm start .
//4. Por fim, crie uma array de compromissos e use a função map para que cada item do array apareça, como um item de lista, no seu componente App .

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas = ['levar maya na rua', 'iniciar estudos', 'almoçar', 'curso trybe', 'estudar...'];

function App() {
  return (
    <div>
      <h1>Tarefas de hoje Alan</h1>
      <ul>
        {tarefas.map((atividades) => Task(atividades))}
      </ul>
    </div>
  );
}

export default App; 
