import Link from 'next/link';
import { Amoeba } from '@lib/types';

function AmoebaCard({ data }: { data: Amoeba }) {
  return (
    <Link key={data.name} href={`/amoeba/${data.name}`}>
        <a role="button" tabIndex={0} className="button-grid">
            {data.video}
        </a>
    </Link>
  );
}

type Props = {
  amoebas: Amoeba[];
};

export default function AmoebaGrid({ amoebas }: Props) {
  const otherAmoebas = amoebas.filter(s => s.name !== 'silver');

  return (
    <>
      <div className="grid-theme">
        {otherAmoebas.map(data => (
          <AmoebaCard key={data.name} data={data} />
        ))}
      </div>
    </>
  );
}
