/**
 * 1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
 * 2. Compare SQL and NoSQL databases?
 * 3. What is express js? What is Nest JS (google it)?
 * 4. What is MongoDB aggregate and how does it work (google it)?
 */

const Blogs = () => {
  return (
    <div className="w-3/4 py-12 mx-auto">
      <div className="mb-5">
        <h2 className="text-3xl font-bold text-green-900">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h2>
        <p className="text-xl text-black">
          An access token and refresh token are commonly used in authentication
          systems. Here is a concise explanation of each:
        </p>
        <ul className="text-xl text-black">
          <li>
            Access Token: An access token is a credential that grants the bearer
            access to specific resources or services. It is typically issued by
            an authorization server after the user successfully authenticates.
            The access token is included in each request to the server, allowing
            the server to verify the user is identity and authorize their
            actions. Refresh Token: A refresh token is a long-lived credential
            that is used to obtain a new access token when the current one
            expires. It is usually issued alongside the access token and is
            stored securely on the client-side. When the access token expires,
            the client can use the refresh token to request a new access token
            without requiring the user to reauthenticate.
          </li>
        </ul>
        <br />
        <p className="text-xl text-black">
          Regarding storage on the client-side, it is crucial to prioritize
          security. Here is a recommendation:
        </p>
        <ul className="text-xl text-black">
          <li>
            Access Token: Store the access token securely on the client-side,
            typically in memory or a short-lived storage mechanism, like a
            browser is session storage. This ensures the access token is
            accessible to the client is JavaScript code but protected against
            persistent storage vulnerabilities. Refresh Token: Store the refresh
            token securely on the client-side, preferably in an HTTP-only secure
            cookie. This prevents client-side JavaScript from accessing the
            refresh token directly, reducing the risk of token theft through
            cross-site scripting (XSS) attacks. Storing it in an HTTP-only
            secure cookie mitigates the risk of unauthorized access.
          </li>
        </ul>
      </div>
      <div className="mb-5">
        <h2 className="text-3xl font-bold text-green-900">2. Compare SQL and NoSQL databases?</h2>
        <ul className="text-xl text-black">
          <li>SQL databases are relational, and NoSQL databases are non-relational.</li>
          <li>
            SQL databases use structured query language (SQL) and have a
            predefined schema. NoSQL databases have dynamic schemas for
            unstructured data.
          </li>
          <li>
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable.
          </li>
          <li>
            SQL databases are table-based, while NoSQL databases are document,
            key-value, graph, or wide-column stores.
          </li>
          <li>
            SQL databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </li>
        </ul>
      </div>
      <div className="mb-5">
        <h2 className="text-3xl font-bold text-green-900">3. What is express js? What is Nest JS</h2>
        <p className="text-xl text-black">Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI</p>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-green-900">4. What is MongoDB aggregate and how does it work</h2>
        <p className="text-xl text-black"> Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
      </div>
    </div>
  );
};

export default Blogs;
