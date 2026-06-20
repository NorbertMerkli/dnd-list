import p from "../package.json";

export const App = () => {
  return (
    <main className="grid min-h-screen grid-cols-[auto_auto] place-content-center gap-x-4 bg-linear-to-t from-sky-100 to-sky-50 p-8 text-sky-950">
      <h1 className="col-span-full mb-4 text-2xl font-bold text-sky-700">
        package.json
      </h1>
      <Dependencies title="dependencies" packages={p.dependencies} />
      <Dependencies title="devDependencies" packages={p.devDependencies} />
    </main>
  );
};

const Dependencies = (props: {
  title: string;
  packages: Record<string, string>;
}) => {
  return (
    <>
      <h2 className="col-span-full mb-2 border-b border-current font-bold">
        {props.title}
      </h2>
      <ul className="col-span-full mb-2 grid grid-cols-subgrid text-sm">
        {Object.entries(props.packages).map(([name, version]) => (
          <li className="col-span-full grid grid-cols-subgrid" key={name}>
            <span className="text-sky-700">{name}</span>
            <span className="text-right">{version}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
