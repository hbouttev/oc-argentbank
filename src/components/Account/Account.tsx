interface AccountProps {
  name: string;
  id: string;
  balance: number;
  balanceType: 'available' | 'current' | string;
}

export default function Account({
  name,
  id,
  balance,
  balanceType,
}: AccountProps) {
  const formattedBalance = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(balance);
  const capitalizedBalanceType =
    balanceType.charAt(0).toUpperCase() + balanceType.slice(1);

  return (
    <section className="mx-auto mb-8 box-border flex w-4/5 flex-col items-center justify-between border border-solid border-black bg-white p-6 text-left min-[720px]:flex-row">
      <div className="w-full flex-1">
        <h3>
          {name} ({id})
        </h3>
        <p className="text-[2.5rem] font-bold leading-10">{formattedBalance}</p>
        <p>{capitalizedBalanceType} Balance</p>
      </div>
      <div className="w-full flex-1 min-[720px]:flex-[0]">
        <button className="mt-4 block w-full border-tertiary bg-tertiary p-2 text-[1.1rem] font-bold text-white min-[720px]:w-[200px]">
          View transactions
        </button>
      </div>
    </section>
  );
}
