import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog | Superfinity");
  return (
    <div className="comic py-20 space-y-4">
      <div className="space-y-4 w-3/4 mx-auto text-white">
        <h3 className="lg:text-3xl text-2xl font-bold">
          Question and Answers |{" "}
          <span className="text-[#F0141E]">Superfinity Knowledge</span>
        </h3>
        <div className="line h-1"></div>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 py-20 w-3/4 mx-auto">
        <div className="space-y-4">
          {/* FAQ 1 */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow bg-base-100 rounded-box text-black"
          >
            <div className="collapse-title text-xl bg-[#F0141E] text-white font-semibold">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </div>
            <div className="collapse-content space-y-1">
              <p className="mt-2">
                When a user logged in, server creates a access token(jwt) for
                respective user, and it will send the token to the client side.
                Next time if the user needs to access anything or need
                authorization, a copy of that token has to send to the server
                for authorization. Server verifies the token before giving
                authorization.
              </p>
              <p>
                A refresh token is a special token used to obtain a new access
                token without re-authenticating the user. When the access token
                expires, the client can send the refresh token to the
                authentication server to request a new access token. If the
                refresh token is valid and has not expired, the server responds
                with a new access token.
              </p>
              <p>
                Access tokens and refresh tokens should be stored securely to
                prevent unauthorized access. In the client-side, access tokens
                are often stored in localStorage, Cookies or HTTP-only cookies.
              </p>
            </div>
          </div>
          {/* FAQ 3 */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow bg-base-100 rounded-box text-black"
          >
            <div className="collapse-title text-xl bg-[#F0141E] text-white font-semibold">
              What is express js? What is Nest JS?
            </div>
            <div className="collapse-content space-y-2">
              <p className="mt-2">
                Express is a node js web application framework that provides broad features for building web and mobile application. It is used to build a single page, multi-page, and hybrid web application. It&apos;s a layer built on the top of node js that helps manage servers and routes.
              </p>
              <p>Nest.js is a progressive Node.js framework built with TypeScript. It provides features like dependency injection, decorators, middleware, routing, and more.</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {/* FAQ 2 */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow bg-base-100 rounded-box text-black"
          >
            <div className="collapse-title text-xl bg-[#F0141E] text-white font-semibold">
              Compare SQL and NoSQL databases?
            </div>
            <div className="collapse-content grid grid-cols-2 ">
              <p className="text-center text-[#f0141e] border p-1 rounded-sm border-[#F0141E] mt-2">SQL</p>
              <p className="text-center text-[#f0141e] border p-1 rounded-sm border-[#F0141E]">NoSQL</p>
              <p className="border p-1 rounded-sm border-[#F0141E]">Stands for Structured Query Language</p>
              <p className="border p-1 rounded-sm border-[#F0141E]">Stands for Not Only SQL</p>
              <p className="border p-1 rounded-sm border-[#F0141E]">Relational database management system (RDBMS)</p>
              <p className="border p-1 rounded-sm border-[#F0141E]">Non-relational database management system</p>
              <p className="border p-1 rounded-sm border-[#F0141E]">Suitable for structured data with predefined schema</p>
              <p className="border p-1 rounded-sm border-[#F0141E]">Suitable for unstructured and semi-structured data</p>
              <p className="border p-1 rounded-sm border-[#F0141E]">Data is stored in tables with columns and rows</p>
              <p className="border p-1 rounded-sm border-[#F0141E]">Data is stored in collections or documents</p>
              <p className="border p-1 rounded-sm border-[#F0141E]">Examples: MySQL, PostgreSQL, Oracle etc</p>
              <p className="border p-1 rounded-sm border-[#F0141E]">Examples: MongoDB, Cassandra etc</p>
            </div>
          </div>

          {/* FAQ 4 */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow bg-base-100 rounded-box text-black"
          >
            <div className="collapse-title text-xl bg-[#F0141E] text-white font-semibold">
              What is MongoDB aggregate and how does it work?
            </div>
            <div className="collapse-content">
              <p>
              In MongoDB, the aggregate operation is used to perform advanced data processing and analysis tasks on collections. It allows you to perform complex operations like grouping, filtering, sorting, joining, and transforming data within the MongoDB server.
              </p>
              <p>MongoDB&apos;s aggregate operation processes data through a series of stages defined in a pipeline. Each stage applies specific operations to input documents and passes the result to the next stage. The pipeline allows for data transformation, aggregation, and computation, enabling complex queries and analyses in a single operation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
