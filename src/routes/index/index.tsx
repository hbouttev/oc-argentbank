import Highlights from '~/components/Highlights/Highlights.tsx';
import { highlights } from '~/mocked-data/landingPage.ts';

export default function RootIndex() {
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
