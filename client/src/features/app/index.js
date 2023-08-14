import '../../assets/global.scss';
import Input from '../../components/Input';
import JobPostingCard from '../../components/JobPostingCard';

const App = () => {
  return (
    <div className="container">
      <header className="nav-bar">
        <div className="nav-bar__logo">
          <h1>Dev jobs</h1>
        </div>

        <div className="nav-bar__settings">
          settings
        </div>
      </header>

      <main>
        <section className="search-bar">
          <Input
            icon="fa-solid fa-magnifying-glass icon"
            placeholder="Filter by title, company, expterise"
            type="text"
            className="position__input" />

          <Input
            icon="fa-solid fa-location-dot icon"
            placeholder="Filter by location ..."
            type="text"
            className="position__input" />

          <button className="filter-btn">
            Filter
          </button>
        </section>

        <section className="job-postings">
        {[1,2,3,4,5,6,7,8,9,10,11].map((post) =>
          <JobPostingCard key={post} />
        )}
        </section>
      </main>

      <footer>
        
      </footer>
    </div>
  );
}

export default App;
