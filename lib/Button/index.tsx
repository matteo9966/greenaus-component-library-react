import clsx from "clsx";
import styles from "./styles.module.css";
export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...rest } = props;
  return (
    <button
      {...rest}
      style={{ border: "1px solid green" }}
      className={clsx(className, styles.button)}
    />
  );
}
