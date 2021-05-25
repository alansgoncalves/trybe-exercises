
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas = ['levar maya na rua', 'iniciar estudos', 'almoçar', 'curso trybe'];

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
