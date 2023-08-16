import '../../assets/global.scss';
import Input from '../../components/Input';
import Button from '../../components/Button';
import JobPostingCard from '../../components/JobPostingCard';

const App = () => {
  return (
    <div className="container">
      <header className="nav-bar">
        <div className="nav-bar__logo">
          <h1>Dev jobs</h1>
        </div>

        <div className="nav-bar__settings">
          <a href={`/user/login`}>
            <Button
              className="js-btn primary"
              icon="fa-solid fa-right-to-bracket"
              text="Login" />
          </a>

          <a href={`/user/register`}>
            <Button
              className="js-btn secondary"
              icon="fa-solid fa-user-plus"
              text="Register" />
          </a>
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

          <Button
            className="js-btn primary"
            icon="fa-solid fa-magnifying-glass"
            text="Search" />
        </section>

        <section className="job-postings">
        {[1,2,3,4,5,6,7,8,9,10,11].map((post) =>
          <JobPostingCard key={post} />
        )}
        </section>
      </main>
    </div>
  );
}

export default App;
