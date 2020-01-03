import Layout from '../src/components/MyLayout';
import Link from 'next/link';
import "../src/css/main.scss"
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function getPosts() {
    return [
        { id: 'hello-nextjs', title: 'Hello Next.js' },
        { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
        { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
    ];
}

const options = {
    title: {
        text: 'My chart'
    },
    series: [{
        data: [1, 2, 3]
    }]
};

export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
            <ul>
                {getPosts().map(post => (
                    <li key={post.id}>
                        <Link href="/p/[id]" as={`/p/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
        </Layout>
    );
}