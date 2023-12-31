import packageJson from '../../package.json';

export function BaseLayout(
  props: Html.PropsWithChildren<{
    description?: string;
    head?: string;
    title?: string;
  }>,
) {
  const title = `${props.title ?? 'Simple URL shortener'} | Daniel Rötzer`;
  const description = props.description ?? packageJson.description;

  return (
    <>
      {'<!doctype html>'}
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="description" content={description} />
          <meta name="author" content={packageJson.author.name} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{title}</title>
          {props.head}
          )}
        </head>
        <body>{props.children}</body>
      </html>
    </>
  );
}

// const html = (
//   <Layout
//     head={
//       <>
//         <link rel="stylesheet" href="/style.css" />
//         <script src="/script.js" />
//       </>
//     }
//   >
//     <div>Hello World</div>
//   </Layout>
// );
