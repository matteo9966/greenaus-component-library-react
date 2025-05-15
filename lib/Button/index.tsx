import clsx from "clsx";
import "./styles.scss";
export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...rest } = props;
  return (
    <div className="greenaus-component-library-react">
      <button
        {...rest}
        style={{ border: "1px solid green" }}
        className={clsx("btn btn-outline-success")}
      />

<div className="card-wrapper border shadow">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title h5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h3>
          <p className="card-text font-serif">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
   
    </div>
  );
}
