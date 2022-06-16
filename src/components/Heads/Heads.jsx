import Head from "next/head";

export default function Heads(props) {

  return (
    <Head>
      <title>{props.title}</title>
      <meta name={props.name} content={props.content} />
      <link rel={props.rel} href={props.href} />
    </Head>
  );
};
