'use client'
import useLayout from '@/hooks/useLayout';

const mockData = [
  {
    news: 'this is first news, Highlights: Interviews Writings Available, Newsletter Available.',
    impact: ['usd', 'gold', 'hello'],
    score: 90
  },
  {
    news: 'this is second news',
    impact: ['tw', 'gold', 'world'],
    score: 80
  },
  {
    news: 'this is third news',
    impact: ['yen', 'gold', 'hello'],
    score: 90
  },
  {
    news: 'this is fourth news',
    impact: ['ustd', 'gold', 'world'],
    score: 80
  },
  {
    news: 'this is fifthnews',
    impact: ['hkd', 'gold', 'world'],
    score: 80
  },
]

type TldrDataType = {
  news: string;
  impact: string[],
  score: number,
};


const TLDR = () => {
  // const { isTablet, isDesktop } = useLayout();

  return (
    <div>
      <div className='flex items-center border-b-2'>
        <h2 className='grow text-4xl text-primary-900 font-black'> TL:DR </h2>
        <div className='w-14 text-xs text-primary-80'> Impact </div>
        <div className='w-10 text-xs text-center text-primary-800'> Score </div>
      </div>
    
      <div className='mt-2 flex flex-col'>
        {mockData?.map((item, index) => {
          return (
            <div key={index}>
              <div className='min-h-14 flex items-center'> 
                <div className='grow flex items-center'>  
                  <div className='w-6 text-xs text-primary-600'> { index + 1} </div>
                  <div className='max-w-40 md:max-w-96 lg:max-w-[38rem] py-1 text-xs text-primary-700 font-black'> {item?.news} </div>
                </div>

                <div>
                  {item?.impact?.map((impact, index) => {
                    return (
                      <div key={index} className='w-14 max-w-14 text-xs text-primary-700'> {impact} </div>
                    );
                  })}
                </div>

                <div className='w-10 max-w-10 text-xs text-center text-primary-700'> {item?.score} </div>
              </div>
              <div className='border-1 border-solid'></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TLDR;