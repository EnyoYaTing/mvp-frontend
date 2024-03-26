import ArticleSummary from './ArticleSummary';
import TLDR from './Tldr';

const HomePage = () => {
  return (
    <main className="p-8 bg-white font-mono">
      <TLDR />
      <ArticleSummary />
    </main>
  );
};

export default HomePage;
