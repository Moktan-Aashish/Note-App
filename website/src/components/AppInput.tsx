import { Eye, EyeOff } from "lucide-react";
import { useState, type InputHTMLAttributes, type ReactNode } from "react";

type props = {
  label?: string;
  error?: string;
  icon?: ReactNode;
  secure?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export default function AppInput({
  label,
  error,
  icon,
  secure,
  ...props
}: props) {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className={`${error ? "app-label-error" : "app-label"}`}>
          {error ? error : label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div
            className={`absolute top-1/4 left-3 ${error ? "app-label-error" : "app-label"}`}
          >
            {icon}
          </div>
        )}
        <input
          {...props}
          type={secure ? (hidden ? "password" : "text") : props.type}
          className={`app-input ${error ? "app-input-error" : ""}`}
        />
        {secure && (
          <button
            type="button"
            onClick={() => setHidden((prev) => !prev)}
            className={`absolute top-1/4 right-3 ${error ? "app-label-error" : "app-label"}`}
          >
            {hidden ? <EyeOff /> : <Eye />}
          </button>
        )}
      </div>
    </div>
  );
}
