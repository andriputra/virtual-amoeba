import Page from '@components/page';
import Layout from '@components/layout';
import { Sponsor } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

type Props = {
  sponsor: Sponsor;
};

export default function amoebaPage({}: Props) {
  const meta = {
    title: 'Demo - Virtual Event Starter Kit',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
        <Layout>
            <div className="test-video">
                <iframe width="663" height="500" src="https://www.youtube.com/embed/bff-HBVB3hA"></iframe>
            </div>
        </Layout>
    </Page>
  );
}
