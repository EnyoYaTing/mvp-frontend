import ArticleSummary from './ArticleSummary';
import TLDR from './Tldr';

const HomePage = () => {
  return (
    <main className="p-8 md:p-20 lg:px-40">
      <TLDR />
      <ArticleSummary />
    </main>
  );
};

export default HomePage;
