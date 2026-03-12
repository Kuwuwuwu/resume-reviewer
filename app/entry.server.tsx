import type { EntryContext } from "react-router";
import { renderToString } from "react-dom/server";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const html = renderToString(
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Resume Reviewer</title>
      </head>
      <body>
        <div id="root">{/* Content will be rendered here */}</div>
      </body>
    </html>
  );

  const headers = new Headers(responseHeaders);
  headers.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + html, {
    status: responseStatusCode,
    headers,
  });
}
