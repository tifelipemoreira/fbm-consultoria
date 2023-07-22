import Head from "next/head";

export default function Heads(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name={props.name} content={props.content} />
      <meta name="google-site-verification" content="eor8AqCftBzTeDi7RsRQLv233M9470fIJwiStWK5FBs" />
    </Head>
  );
};
