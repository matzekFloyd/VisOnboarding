import Layout from '../src/components/MyLayout';
import Link from 'next/link';
import "../src/css/main.scss"

export default function Blog() {
    return (
        <Layout>
            <li>
                <Link href={"/p/[id]"} as={`/p/vis`}>
                    <a>Vis</a>
                </Link>
            </li>

            <li>
                <Link href={"/p/[id]"} as={`/p/vis-onboarding`}>
                    <a>Vis + onboarding </a>
                </Link>
            </li>
        </Layout>
    );
}