const mockData = [
  {
    news: 'this is first news',
    impact: ['usd', 'gold', 'hello'],
    score: 90
  },
  {
    news: 'this is second news',
    impact: ['tw', 'gold', 'world'],
    score: 80
  },
]

type TldrDataType = {
  news: string;
  impact: string[],
  score: number,
};

const TLDR = () => {

  const renderTable = (item: TldrDataType, index: number) => {
    const renderImpact = (impact: string) => {
      return (
        <div className="w-1/5 pr-2"> {impact} </div>
      );   
    }
    return (
      <div className="flex flex-1">
        <div className="w-3/5 flex "> 
          <div className="pr-2"> {index+1} </div>
          <p> {item.news} </p>
        </div>
        {item.impact?.map(impact => renderImpact(impact))}
        <div className="w-1/5 ml-2"> {item.score}</div>
      </div>
    );
  };

  return (
    <div>
      <div className="table-header flex justify-start" >
        <div className="w-3/5 text-4xl lg:text-5xl text-primary-900 font-black">  TLDR </div>
        <div className="w-1/5 text-primary-800"> Impact </div>
        <div className="w-1/5 text-primary-800 ml-2"> Score </div>
      </div>
      <div className="border-2"></div>
      <div className="tablebody flex flex-col justify-start text-xs text-primary-700 py-4">
        {mockData.map((item, index) => renderTable(item, index))}

        {/* <div className="w-3/5 flex "> 
          <div className="pr-2"> 1 </div>
          <p>text</p>
        </div>
        <div className="w-1/5 pr-2"> usd gold </div>
        <div className="w-1/5 ml-2"> 80 </div> */}
      </div>
    </div>
  );
};

export default TLDR;