import Highlights from '~/components/Highlights/Highlights.tsx';

export default function RootIndex() {
  const highlights = [
    {
      title: 'You are our #1 priority',
      description:
        'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
      imageUrl: '/src/assets/icons/icon-chat.png',
      imageAlt: 'Chat icon',
      id: '1',
    },
    {
      title: 'More savings means higher rates',
      description:
        'The more you save with us, the higher your interest rate will be!',
      imageUrl: '/src/assets/icons/icon-money.png',
      imageAlt: 'Money icon',
      id: '2',
    },
    {
      title: 'Security you can trust',
      description:
        'We use top of the line encryption to make sure your data and money is always safe.',
      imageUrl: '/src/assets/icons/icon-security.png',
      imageAlt: 'Security icon',
      id: '3',
    },
  ];
  
  return (
    <>
      <div className="relative h-[300px] bg-[url('/src/assets/images/bank-tree.jpeg')] bg-cover bg-[0_-50px] bg-no-repeat min-[920px]:h-[400px] min-[920px]:bg-[0%_33%]">
        <section className="relative top-8 mx-auto my-0 box-content w-[200px] bg-white p-8 text-left min-[920px]:absolute min-[920px]:right-[50px] min-[920px]:top-[50px] min-[920px]:m-8 min-[920px]:w-[300px]">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="text-base font-bold min-[920px]:text-2xl">No fees.</p>
          <p className="text-base font-bold min-[920px]:text-2xl">
            No minimum deposit.
          </p>
          <p className="text-base font-bold min-[920px]:text-2xl">
            High interest rates.
          </p>
          <p className="mt-[1em] text-[0.9rem] min-[920px]:text-[1.2rem]">
            Open a savings account with Argent Bank today!
          </p>
        </section>
      </div>
      <section className="flex flex-col min-[920px]:flex-row">
        <h2 className="sr-only">Features</h2>
        {highlights.map((highlight) => (
          <div key={highlight.id} className="flex-1 p-10">
            <Highlights
              title={highlight.title}
              description={highlight.description}
              imageUrl={highlight.imageUrl}
              imageAlt={highlight.imageAlt}
            />
          </div>
        ))}
      </section>
    </>
  );
}
