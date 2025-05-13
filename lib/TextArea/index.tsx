import clsx from "clsx";
import styles from "./styles.module.scss";
export function TextArea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  const { className, ...rest } = props;
  return (
    <textarea
      {...rest}
      style={{ border: "1px solid green" }}
      className={clsx(className, styles.textarea)}
    />
  );
}
