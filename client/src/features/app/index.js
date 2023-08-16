import '../../assets/global.scss';
import NavBar from '../../components/NavBar';
import JobPostingList from '../jobPostingList';

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <JobPostingList />
     
    </div>
  );
}

export default App;
